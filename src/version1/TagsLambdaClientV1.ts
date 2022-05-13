import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { PartyTagsV1 } from './PartyTagsV1';
import { ITagsClientV1 } from './ITagsClientV1';

export class TagsLambdaClientV1 extends CommandableLambdaClient implements ITagsClientV1 {

    constructor(config?: any) {
        super('tags');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getTags(correlationId: string, partyId: string): Promise<PartyTagsV1> {
        let timing = this.instrument(correlationId, 'tags.get_tags');

        try {
            return await this.callCommand(
                'get_tags',
                correlationId,
                {
                    party_id: partyId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setTags(correlationId: string, partyTags: PartyTagsV1): Promise<PartyTagsV1> {
        let timing = this.instrument(correlationId, 'tags.set_tags');

        try {
            return await this.callCommand(
                'set_tags',
                correlationId,
                {
                    party_tags: partyTags
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
    public async recordTags(correlationId: string, partyId: string, tags: string[]): Promise<PartyTagsV1> {
        let timing = this.instrument(correlationId, 'tags.record_tags');

        try {
            return await this.callCommand(
                'record_tags',
                correlationId,
                {
                    party_id: partyId,
                    tags: tags
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
}
