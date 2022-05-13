import { CommandableLambdaClient } from 'pip-services3-aws-nodex';
import { PartyTagsV1 } from './PartyTagsV1';
import { ITagsClientV1 } from './ITagsClientV1';
export declare class TagsLambdaClientV1 extends CommandableLambdaClient implements ITagsClientV1 {
    constructor(config?: any);
    getTags(correlationId: string, partyId: string): Promise<PartyTagsV1>;
    setTags(correlationId: string, partyTags: PartyTagsV1): Promise<PartyTagsV1>;
    recordTags(correlationId: string, partyId: string, tags: string[]): Promise<PartyTagsV1>;
}
