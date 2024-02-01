import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

const setupTracing = () => {
    const sdk = new NodeSDK({
        instrumentations: [getNodeAutoInstrumentations()],
    });
    
    sdk.start();
};

export { setupTracing };
