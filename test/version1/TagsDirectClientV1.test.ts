import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { TagsMemoryPersistence } from 'service-tags-node';
import { TagsController } from 'service-tags-node';
import { TagsDirectClientV1 } from '../../src/version1/TagsDirectClientV1';
import { TagsClientFixtureV1 } from './TagsClientFixtureV1';

suite('TagsDirectClientV1', ()=> {
    let persistence: TagsMemoryPersistence;
    let client: TagsDirectClientV1;
    let fixture: TagsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        persistence = new TagsMemoryPersistence();
        let controller = new TagsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-tags', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-tags', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new TagsDirectClientV1();
        client.setReferences(references);

        fixture = new TagsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    setup(async () => {
        await persistence.clear(null);
    });

    test('Get and Set Tags', async () => {
        await fixture.testGetAndSetTags();
    });

    test('Record Tags', async () => {
        await fixture.testRecordTags();
    });
});
