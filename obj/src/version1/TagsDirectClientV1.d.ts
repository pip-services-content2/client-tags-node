import { DirectClient } from 'pip-services3-rpc-nodex';
import { ITagsClientV1 } from './ITagsClientV1';
import { PartyTagsV1 } from './PartyTagsV1';
export declare class TagsDirectClientV1 extends DirectClient<any> implements ITagsClientV1 {
    constructor(config?: any);
    getTags(correlationId: string, partyId: string): Promise<PartyTagsV1>;
    setTags(correlationId: string, partyTags: PartyTagsV1): Promise<PartyTagsV1>;
    recordTags(correlationId: string, partyId: string, tags: string[]): Promise<PartyTagsV1>;
}
