import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { TagsMemoryPersistence } from 'service-tags-node';
import { TagsController } from 'service-tags-node';
import { TagsHttpServiceV1 } from 'service-tags-node';
import { TagsHttpClientV1 } from '../../src/version1/TagsHttpClientV1';
import { TagsClientFixtureV1 } from './TagsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('TagsHttpClientV1', ()=> {
    let persistence: TagsMemoryPersistence;
    let service: TagsHttpServiceV1;
    let client: TagsHttpClientV1;
    let fixture: TagsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        persistence = new TagsMemoryPersistence();
        let controller = new TagsController();

        service = new TagsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-tags', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-tags', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-tags', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new TagsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new TagsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
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
