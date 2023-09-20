(async () => {
    const formData = { name: 'ddd', email: 'hdeydgeydgeyg@hsgssm.com', message: 'hdeydgeydgeyg@hsgssm.com', recaptchaResponse: '03AFcWeA7xYEq2zw2hXYwGyR6uRER91iWiJq_LVBw7eYx96rAK…SLg-B1JRE09khL4pCjZRW20IqDOA9UeqbtH9ZEbLZ0AseugmY' }

    const response = await fetch('https://script.google.com/macros/s/AKfycbxCj58GXv5EfVUZgKeFB9ZwCg-YP2eD55p7hN6znhDnXYzln9htqDkw7izwBYK7C8Tc/exec', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(formData),
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    })
    const data = await response.json()
    console.log("Response is : ", data)


})();