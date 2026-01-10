// Runner script to bypass Windows path issues with & character
import('jiti').then(({ default: createJiti }) => {
    const jiti = createJiti(import.meta.url);
    jiti('./src/index.ts');
}).catch(console.error);
