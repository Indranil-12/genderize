async function clicked() {
    let data = "";
    let res;
    let probability = 0;
    let input = document.querySelector("#name").value;
    let output = document.querySelector("#output");
    output.innerHTML = `
            <center >
                <div class="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-secondary" role="status">
                <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-success" role="status">
                <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-danger" role="status">
                <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-warning" role="status">
                <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-info" role="status">
                <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-dark" role="status">
                <span class="sr-only"></span>
                </div>
            </center>`
    try {
        res = await fetch(`https://api.genderize.io?name=${input}`);
    } catch (err) {
        console.log(err);
    } finally {
        if (res) {
            res = await res.json();
            console.log(res);
            let percent = res.probability
            percent *= 100;
            data += `
                        <b>${input}</b> is <b>${res.gender}</b> with <b>${percent}%</b> certainty
                        
                    `
            setTimeout(() => {
                output.innerHTML = data;
            }, 2000)
        }
    }

}
