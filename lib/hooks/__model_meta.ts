/* eslint-disable */
const metadata = {
    models: {
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, email: {
                    name: "email",
                    type: "String",
                }, name: {
                    name: "name",
                    type: "String",
                }, password: {
                    name: "password",
                    type: "String",
                }, characters: {
                    name: "characters",
                    type: "Character",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, email: {
                    name: "email",
                    fields: ["email"]
                },
            }
            ,
        }
        ,
        character: {
            name: 'Character', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, name: {
                    name: "name",
                    type: "String",
                }, player: {
                    name: "player",
                    type: "Int",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'user',
                }, age: {
                    name: "age",
                    type: "String",
                    isOptional: true,
                }, pronouns: {
                    name: "pronouns",
                    type: "String",
                    isOptional: true,
                }, gender: {
                    name: "gender",
                    type: "String",
                    isOptional: true,
                }, birthday: {
                    name: "birthday",
                    type: "String",
                    isOptional: true,
                }, address: {
                    name: "address",
                    type: "String",
                    isOptional: true,
                }, hometown: {
                    name: "hometown",
                    type: "String",
                    isOptional: true,
                }, approach: {
                    name: "approach",
                    type: "String",
                    isOptional: true,
                }, spheres: {
                    name: "spheres",
                    type: "String",
                    isOptional: true,
                }, incomeSource: {
                    name: "incomeSource",
                    type: "String",
                    isOptional: true,
                }, background: {
                    name: "background",
                    type: "String",
                    isOptional: true,
                }, imageurl: {
                    name: "imageurl",
                    type: "String",
                    isOptional: true,
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, npc: {
                    name: "npc",
                    type: "NonPlayerCharacter",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'character',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'characters',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "player" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        nonPlayerCharacter: {
            name: 'NonPlayerCharacter', fields: {
                characterId: {
                    name: "characterId",
                    type: "Int",
                    isId: true,
                    isForeignKey: true,
                    relationField: 'character',
                }, character: {
                    name: "character",
                    type: "Character",
                    isDataModel: true,
                    backLink: 'npc',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "characterId" },
                }, attitudeTo: {
                    name: "attitudeTo",
                    type: "String",
                    isOptional: true,
                }, attitudeFrom: {
                    name: "attitudeFrom",
                    type: "String",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                characterId: {
                    name: "characterId",
                    fields: ["characterId"]
                },
            }
            ,
        }
        ,
        location: {
            name: 'Location', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, latlong: {
                    name: "latlong",
                    type: "String",
                }, imageurl: {
                    name: "imageurl",
                    type: "String",
                    isOptional: true,
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        wonder: {
            name: 'Wonder', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, spheres: {
                    name: "spheres",
                    type: "String",
                }, arete: {
                    name: "arete",
                    type: "Int",
                }, rank: {
                    name: "rank",
                    type: "Int",
                }, type: {
                    name: "type",
                    type: "String",
                }, system: {
                    name: "system",
                    type: "String",
                }, cost: {
                    name: "cost",
                    type: "String",
                    isOptional: true,
                }, quintessence: {
                    name: "quintessence",
                    type: "Int",
                }, effects: {
                    name: "effects",
                    type: "Effect",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'Wonder',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        effect: {
            name: 'Effect', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, requiredSpheres: {
                    name: "requiredSpheres",
                    type: "RequiredSpheres",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'effect',
                }, quintessenceCost: {
                    name: "quintessenceCost",
                    type: "Int",
                }, willpowerCost: {
                    name: "willpowerCost",
                    type: "Int",
                }, Wonder: {
                    name: "Wonder",
                    type: "Wonder",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'effects',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "wonderId" },
                }, wonderId: {
                    name: "wonderId",
                    type: "Int",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'Wonder',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        requiredSpheres: {
            name: 'RequiredSpheres', fields: {
                effectId: {
                    name: "effectId",
                    type: "Int",
                    isId: true,
                    isForeignKey: true,
                    relationField: 'effect',
                }, sphere: {
                    name: "sphere",
                    type: "Sphere",
                    isId: true,
                }, rank: {
                    name: "rank",
                    type: "Int",
                }, effect: {
                    name: "effect",
                    type: "Effect",
                    isDataModel: true,
                    backLink: 'requiredSpheres',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "effectId" },
                },
            }
            , uniqueConstraints: {
                effectId_sphere: {
                    name: "effectId_sphere",
                    fields: ["effectId", "sphere"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
    authModel: 'User'
};
export default metadata;
