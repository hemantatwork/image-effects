async function init(){

    let rustApp = null;

    try {
        const wasm = await import('../pkg')
        rustApp = wasm
    } catch (e) {
        console.error(e)
        return;
    }

    console.log("this is rustApp => ", rustApp)

    const input = document.getElementById('upload');
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        const base64 = fileReader.result.replace(/^data:image\/[a-z]+;base64,/, "");;
        let img_data_url = rustApp.grayscale(base64)

        document.getElementById('new-img').src = img_data_url;
    }

    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0]);
        console.log(input.files[0].name)
    });
}

init()