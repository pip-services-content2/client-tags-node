const assert = require('chai').assert;

import { TagRecordV1 } from '../../src/version1/TagRecordV1';
import { PartyTagsV1 } from '../../src/version1/PartyTagsV1';
import { ITagsClientV1 } from '../../src/version1/ITagsClientV1';

let TAGS = new PartyTagsV1(
    '1', 
    [
        new TagRecordV1('tag1', 10),
        new TagRecordV1('Tag 2', 3),
        new TagRecordV1('TAG3', 4)
    ]
);

export class TagsClientFixtureV1 {
    private _client: ITagsClientV1;
    
    constructor(client: ITagsClientV1) {
        this._client = client;
    }

    public async testGetAndSetTags() {
        // Update party tags
        let partyTags = await this._client.setTags(null, TAGS);

        assert.lengthOf(partyTags.tags, 3);

        // Read and check party tags
        partyTags = await this._client.getTags(null, '1');

        assert.lengthOf(partyTags.tags, 3);
    }

    public async testRecordTags() {
        // Record tags first time
        let partyTags = await this._client.recordTags(
            null,
            '1',
            ['tag1', 'tag 2', 'tag_3']
        );

        assert.lengthOf(partyTags.tags, 3);

        // Record tags second time
        partyTags = await this._client.recordTags(
            null,
            '1',
            ['TAG2', 'tag3', 'tag__4']
        );

        assert.lengthOf(partyTags.tags, 4);

        // Get tags
        partyTags = await this._client.getTags(null, '1');

        assert.lengthOf(partyTags.tags, 4);
    }
}
