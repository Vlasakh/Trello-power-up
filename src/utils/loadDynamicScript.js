export default function loadDynamicScript(url, id) {
    const existingScript = document.getElementById(id);

    return new Promise(res => {
        if (!existingScript) {
            const script = document.createElement('script');

            script.src = url; // URL for the third-party library being loaded.
            script.id = id;
            script.defer = true;
            document.body.appendChild(script);

            script.onload = () => {
                res();
            };
        }

        if (existingScript) {
            res();
        }
    });
}
