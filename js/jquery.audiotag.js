$(document).ready(function() {
    var url = $("#url").val();
    var audioElement = document.createElement('audio');
    //audioElement.setAttribute('src', 'Mogwai2009-04-29_acidjack_t16.ogg');
    audioElement.setAttribute('src', url);
    audioElement.load();
    audioElement.addEventListener("load", function() {
        alert("ss");
        audioElement.play();
        $(".duration span").html(audioElement.duration);
        $(".filename span").html(audioElement.src);
    }, true);


    $('#load').click(function() {
        url = $("#url").val();
        audioElement.setAttribute('src', url);
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.load();
    });
    $('.play').click(function() {
        audioElement.play();
    });

    $('.pause').click(function() {
        audioElement.pause();
    });
    $('.volumeMax').click(function() {
        audioElement.volume = 1;
    });
    $('#volume').change(function() {
        audioElement.volume = $('#volume').val() / 100;
    });


    var data = [
        ['Тест','','','Mogwai2009-04-29_acidjack_t16.ogg'],
        ['Rainwave','Великобританія','Саундтреки','http://stream2.gameowls.com:8000/rainwave.ogg'],
        ['Bitwave','Великобританія','Саундтреки','http://stream2.gameowls.com:8000/bitwave.ogg'],
        ['Kohina','Чехія','Електроніка','http://friends-of-radius.ethz.ch/kohina.ogg'],
        ['Vltava','Чехія','Класика','http://amp1.cesnet.cz:8000/z-cro3.ogg'],
        ['Vox Noctem','Німеччина','Готика','http://voxnoctem.de:9113/high.ogg'],
        ['Touho','Японія','Саундтреки','http://touhouradio.com:8080/touhouradio.ogg'],
        ['42FM','Росія','Рок','http://listen.42fm.ru:8000/stealkill-8.0.ogg'],
        ['АCP','Польща','Саундтреки','http://anime.com.pl:8000/radioHQ.ogg'],
        ['SoCoRock','Великобританія','Рок','http://stream.socorock.com:8000/socorock.ogg']
    ]

      var r = new Array(), j = -1;
     r[++j]= '<tr><th>Назва</th> <th>Країна</th><th>Жанр</th></tr>';
     r[++j]= '<tr class="row"> <input class="inp" type="hidden" value="http://stream.socorock.com:8000/socorock.ogg"/><td>SoCoRock</td><td>Великобританія</td><td>Рок</td></tr>';
     for (var key=0, size=data.length; key<size; key++){
     r[++j] ='<tr class="row"><td class="name">';
     r[++j] = data[key][0];
     r[++j] = '</td><td class="country">';
     r[++j] = data[key][1];
     r[++j] = '</td><td class="genre">';
     r[++j] = data[key][2];
     r[++j] = '</td><input class="inp" type="hidden" value="';
     r[++j] = data[key][3];
     r[++j] = '"/></td></tr>';
     }

     $('.stations-list').html(r.join(''));

    $('.row').click(function() {
        url = $(this).children('.inp').attr("value");
        audioElement.setAttribute('src', url);
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.load();
    });
});
