function eventAdder(elem) {
    $('#event-card').append(`<div class="card" style="width: 18rem;">
    <img src="${elem.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${elem.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="/event-${elem.id}" class="btn btn-primary act">Check The Event</a>
    </div>
</div>`);

    $('.act').click(function (e) {
        e.preventDefault();
        let id = $(e.target).attr('href').split('-')[1];
        // console.log(id);
        data = eventData[id];
        Swal.fire({
            title: data.title,
            text: 'Loewn ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            imageUrl: data.image,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    });
}

eventData = [
    {
        'title': 'Event 0',
        'image': 'https://as2.ftcdn.net/v2/jpg/06/34/33/47/1000_F_634334734_ZWbaHjXtHpRJnZwjBkkdb4m6CnyIBhHX.jpg',
        'id': 0
    },
    {
        'title': 'Event 1',
        'image': 'https://img.freepik.com/free-vector/game-streamer-concept-elements-illustrated_23-2148932487.jpg?w=740&t=st=1698046973~exp=1698047573~hmac=b330a6723cffed7437cb6ec61750caa21dcd6ebec87603008f6f7c3024c7d7ac',
        'id': 1
    },
    {
        "title": "Event 2",
        "image": "https://img.freepik.com/free-psd/vr-video-game-composition_1419-2358.jpg?w=740&t=st=1698047064~exp=1698047664~hmac=925e151b0a175a6ea8c7c85a182596bffc7046f56564162460f0d44458f52a2b",
        "id": 2

    },
    {
        'title': 'Event 3',
        'image': 'https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5746.jpg?w=740',
        'id': 3
    }


];
$('#event-card').empty();
eventData.forEach(element => {
    eventAdder(element);
});