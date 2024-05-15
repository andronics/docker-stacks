"use strict";
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.details = void 0;

var fileUtils_1 = require("../../../../FlowHelpers/1.0.0/fileUtils");

/* eslint-disable no-param-reassign */
var details = function () { return ({
    name: 'Set Audio Container',
    description: 'Set the container of the audio output file',
    style: {
        borderColor: '#6efefc',
    },
    tags: 'audio',
    isStartPlugin: false,
    pType: '',
    requiresVersion: '2.11.01',
    sidebarPosition: -1,
    icon: '',
    inputs: [
        {
            label: 'Container',
            name: 'container',
            type: 'string',
            defaultValue: 'mp3',
            inputUI: {
                type: 'dropdown',
                options: [
                    'm4a',
                    'mp3',
                    'flac',
                ],
            },
            tooltip: 'Specify the container to use',
        }
    ],
    outputs: [
        {
            number: 1,
            tooltip: 'Continue to next plugin',
        },
    ],
}); };

exports.details = details;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var plugin = function (args) {
    
    var lib = require('../../../../../methods/lib')();
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-param-reassign
    args.inputs = lib.loadDefaultValues(args.inputs, details);
    
    var newContainer = String(args.inputs.container);
    var forceConform = args.inputs.forceConform;
    
    if ((0, fileUtils_1.getContainer)(args.inputFileObj._id) !== newContainer) {
        
        args.variables.ffmpegCommand.container = newContainer;
        args.variables.ffmpegCommand.shouldProcess = true
        
    }
    
    return {
        outputFileObj: args.inputFileObj,
        outputNumber: 1,
        variables: args.variables,
    };

};

exports.plugin = plugin;
