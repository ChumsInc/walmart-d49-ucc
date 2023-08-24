
const {readdir, writeFile}  = require('node:fs/promises');

const state = {
    storeFiles: {},
}

const main = async () => {
    try {
        const filenames = await readdir('public/pdf');
        const regExp = /Store ([0-9]+)\.pdf$/
        filenames.forEach(f => {
            const res = regExp.exec(f);
            if (res && res[1]) {
                const storeNo = res[1];
                state.storeFiles[storeNo] = f;
            }
        })
        const js = `export const stores = ${JSON.stringify(state.storeFiles, undefined, 2)}`
        await writeFile('./src/stores.js', js);
        console.log('files: ', Object.keys(state.storeFiles).length);
    } catch (err) {
        if (err instanceof Error) {
            console.debug("main()", err.message);
            return Promise.reject(err);
        }
        console.debug("main()", err);
        return Promise.reject(new Error('Error in main()'));
    }
}

main().catch(err => console.log(err.message));
