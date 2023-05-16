var animData = {
        container: document.getElementById('bodymovin'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://res.cloudinary.com/lufutu/raw/upload/v1501744549/orca_family_data_cr9tzh.json'
    };
    var anim = bodymovin.loadAnimation(animData);