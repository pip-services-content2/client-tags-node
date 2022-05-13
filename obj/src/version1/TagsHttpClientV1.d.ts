import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { PartyTagsV1 } from './PartyTagsV1';
import { ITagsClientV1 } from './ITagsClientV1';
export declare class TagsHttpClientV1 extends CommandableHttpClient implements ITagsClientV1 {
    constructor(config?: any);
    getTags(correlationId: string, partyId: string): Promise<PartyTagsV1>;
    setTags(correlationId: string, partyTags: PartyTagsV1): Promise<PartyTagsV1>;
    recordTags(correlationId: string, partyId: string, tags: string[]): Promise<PartyTagsV1>;
}
