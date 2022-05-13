"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const TagsNullClientV1_1 = require("../version1/TagsNullClientV1");
const TagsDirectClientV1_1 = require("../version1/TagsDirectClientV1");
const TagsHttpClientV1_1 = require("../version1/TagsHttpClientV1");
const version1_1 = require("../version1");
class TagsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(TagsClientFactory.NullClientV1Descriptor, TagsNullClientV1_1.TagsNullClientV1);
        this.registerAsType(TagsClientFactory.DirectClientV1Descriptor, TagsDirectClientV1_1.TagsDirectClientV1);
        this.registerAsType(TagsClientFactory.HttpClientV1Descriptor, TagsHttpClientV1_1.TagsHttpClientV1);
        this.registerAsType(TagsClientFactory.LambdaClientV1Descriptor, version1_1.TagsLambdaClientV1);
    }
}
exports.TagsClientFactory = TagsClientFactory;
TagsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-tags', 'factory', 'default', 'default', '1.0');
TagsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-tags', 'client', 'null', 'default', '1.0');
TagsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-tags', 'client', 'direct', 'default', '1.0');
TagsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-tags', 'client', 'http', 'default', '1.0');
TagsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-tags', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=TagsClientFactory.js.map