import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { ITagsClientV1 } from './ITagsClientV1';
//import { ITagsController } from 'service-tags-node';
import { PartyTagsV1 } from './PartyTagsV1';

export class TagsDirectClientV1 extends DirectClient<any> implements ITagsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-tags", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getTags(correlationId: string, partyId: string): Promise<PartyTagsV1> {
        let timing = this.instrument(correlationId, 'tags.get_tags');
        
        try {
            return await this._controller.getTags(correlationId, partyId);
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
            return await this._controller.setTags(correlationId, partyTags);
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
            return await this._controller.recordTags(correlationId, partyId, tags);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}