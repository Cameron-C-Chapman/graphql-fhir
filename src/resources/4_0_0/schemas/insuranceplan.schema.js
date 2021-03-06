const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary InsurancePlan Schema
 */
module.exports = new GraphQLObjectType({
	name: 'InsurancePlan',
	description:
		'Details of a Health Insurance product/plan provided by an organization.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'InsurancePlan_Enum_schema',
					values: { InsurancePlan: { value: 'InsurancePlan' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The current state of the health insurance product.',
		},
		status: {
			type: CodeScalar,
			description: 'The current state of the health insurance product.',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The kind of health insurance product.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'Official name of the health insurance product as designated by the owner.',
		},
		name: {
			type: GraphQLString,
			description:
				'Official name of the health insurance product as designated by the owner.',
		},
		_alias: {
			type: require('./element.schema.js'),
			description:
				'A list of alternate names that the product is known as, or was known as in the past.',
		},
		alias: {
			type: new GraphQLList(GraphQLString),
			description:
				'A list of alternate names that the product is known as, or was known as in the past.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'The period of time that the health insurance product is available.',
		},
		ownedBy: {
			type: new GraphQLUnionType({
				name: 'InsurancePlanownedBy_ownedBy_Union',
				description:
					"The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.",
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				"The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.",
		},
		administeredBy: {
			type: new GraphQLUnionType({
				name: 'InsurancePlanadministeredBy_administeredBy_Union',
				description:
					'An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.',
		},
		coverageArea: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'InsurancePlancoverageArea_coverageArea_Union',
					description:
						"The geographic region in which a health insurance product's benefits apply.",
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description:
				"The geographic region in which a health insurance product's benefits apply.",
		},
		contact: {
			type: new GraphQLList(require('./insuranceplancontact.schema.js')),
			description:
				'The contact for the health insurance product for a certain purpose.',
		},
		endpoint: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'InsurancePlanendpoint_endpoint_Union',
					description:
						'The technical endpoints providing access to services operated for the health insurance product.',
					types: () => [require('./endpoint.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Endpoint') {
							return require('./endpoint.schema.js');
						}
					},
				}),
			),
			description:
				'The technical endpoints providing access to services operated for the health insurance product.',
		},
		network: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'InsurancePlannetwork_network_Union',
					description:
						'Reference to the network included in the health insurance product.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'Reference to the network included in the health insurance product.',
		},
		coverage: {
			type: new GraphQLList(require('./insuranceplancoverage.schema.js')),
			description:
				'Details about the coverage offered by the insurance product.',
		},
		plan: {
			type: new GraphQLList(require('./insuranceplanplan.schema.js')),
			description: 'Details about an insurance plan.',
		},
	}),
});
