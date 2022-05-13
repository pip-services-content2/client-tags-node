import { ITagsClientV1 } from './ITagsClientV1';
import { PartyTagsV1 } from './PartyTagsV1';

export class TagsNullClientV1 implements ITagsClientV1 {

    public async getTags(correlationId: string, partyId: string): Promise<PartyTagsV1> {
        return new PartyTagsV1(partyId, []);
    }

    public async setTags(correlationId: string, partyTags: PartyTagsV1): Promise<PartyTagsV1> {
        return partyTags;
    }
    
    public async recordTags(correlationId: string, partyId: string, tags: string[]): Promise<PartyTagsV1> {
        return new PartyTagsV1(partyId, []);
    }

}