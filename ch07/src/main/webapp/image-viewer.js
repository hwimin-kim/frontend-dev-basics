let imageViewer = {
    init() {
        $(this._init.bind(this));
    },
    _init() {
        $('#btn-change').click(this._changeImage.bind(this));
        $('.image-viewer img').dblclick(this._showImageName);
        $('#btn-slideshow').click(this._slideShow.bind(this));

        // 첫 번쨰 이미지
        this._changeImage();
    },
    _showImageName() {
        alert($(this).attr('alt'));
    },
    _changeImage() {
        do {
            var index = Math.floor(Math.random()*this._images.length);
        } while($(".image-viewer img").attr('alt') === this._images[index].name);
        

        let info = this._images[index];
        
        $('.image-viewer img').attr({
            src: 'images/' + info.file,
            alt: info.name
        });
    },
    _slideShow() {
        if(this._intervalId){
            $('#btn-slideshow').text('슬라이드쇼 시작');
            clearInterval(this._intervalId);
            this._intervalId = null;      
        }
        else {
            $('#btn-slideshow').text('슬라이드쇼 중지');
            this._intervalId = setInterval(this._changeImage.bind(this), 1000);
        }       
    },
    _intervalId: null,
    _images: [{
        name: '이미지01',
        file: 'Chrysanthemum.jpg'
    },{
        name: '이미지02',
        file: 'Desert.jpg'
    },{
        name: '이미지03',
        file: 'Hydrangeas.jpg'
    },{
        name: '이미지04',
        file: 'Jellyfish.jpg'
    },{
        name: '이미지05',
        file: 'Koala.jpg'
    },{
        name: '이미지06',
        file: 'Lighthouse.jpg'
    },{
        name: '이미지07',
        file: 'Penguins.jpg'
    },{
        name: '이미지08',
        file: 'Tulips.jpg'
    },]
}