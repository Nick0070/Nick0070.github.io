import logo from './logo.svg';
import logo2 from './bear-cola.gif';
import logo3 from './drop-bear.gif';
import './App.css';
import { Button } from '@mui/material';
import React from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';







function App() {

<meta name='viewport' content='width=1170 ' />
  let maxhp = 4;

  //let Obcheie_znachenie = 25;
  let Hiznenasila = 3;
  let Yklonenie = 10;
  let Energicnost = 0;

  //let Sila = 0;
  //let Ataka = 0;
  //let Lovkost = 0;
  //let Stels = 0;
  //let Strelba_is_lyka = 0;
  //let Intelekt = 0;
  //let Obychaemost = 0;
  //let Vishivanie = 0;
  //let Medicina = 0;
  //let Harizma = 0;
  //let Zapygivanie = 0;
  //let Pronicatelnost = 0;
  //let Vnehnii_vid = 0;
  //let Manipulirovanie = 0;

  const [Obcheie_znachenie, Mines] = React.useState(25);
  const [Sila, setCount] = React.useState(0);



  if (Obcheie_znachenie == 0) {
    const button = document.getElementById('.button');

  //   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   
  //   $(".button").click(function(){
  //     $(".show").fadeToggle(100);
  // })

  //  // button.style.display = 'none'
   }




  const onClickSila = () => {
    setCount(Sila + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Ataka, setCount2] = React.useState(0);
  const onClickAtaka = () => {
    setCount2(Ataka + 1);
    Mines(Obcheie_znachenie - 1);

  }

  const [Lovkost, setCount3] = React.useState(0);
  const onClickLovkost = () => {
    setCount3(Lovkost + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Stels, setCount4] = React.useState(0);
  const onClickStels = () => {
    setCount4(Stels + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Strelba_is_lyka, setCount5] = React.useState(0);
  const onClickStrelba_is_lyka = () => {
    setCount5(Stels + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Intelekt, setCount6] = React.useState(0);
  const onClickIntelekt = () => {
    setCount6(Intelekt + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Obychaemost, setCount7] = React.useState(0);
  const onClickObychaemost = () => {
    setCount7(Obychaemost + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Vishivanie, setCount8] = React.useState(0);
  const onClickVishivanie = () => {
    setCount8(Vishivanie + 1);
  }

  const [Medicina, setCount9] = React.useState(0);
  const onClickMedicina = () => {
    setCount9(Medicina + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Harizma, setCount10] = React.useState(0);
  const onClicHarizma = () => {
    setCount10(Harizma + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Zapygivanie, setCount11] = React.useState(0);
  const onClicZapygivanie = () => {
    setCount11(Zapygivanie + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Pronicatelnost, setCount12] = React.useState(0);
  const onClicPronicatelnost = () => {
    setCount12(Pronicatelnost + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Vnehnii_vid, setCount13] = React.useState(0);
  const onClicVnehnii_vid = () => {
    setCount13(Vnehnii_vid + 1);
    Mines(Obcheie_znachenie - 1);
  }

  const [Manipulirovanie, setCount14] = React.useState(0);
  const onClicManipulirovanie = () => {
    setCount14(Manipulirovanie + 1);
    Mines(Obcheie_znachenie - 1);
  }

  return (












    <div >

      <body className='App-body'>
        <div className='block-left'>

          <div className='boxleft'>

            <img src={logo3} className=" App-logo " alt="logo" />
            <h3
              className='hp'
            >Hp  {maxhp} / {maxhp}</h3>

            <div> <h3
              children="Имя"
              className='Name' />
              <input className='text'></input>
            </div>


            <div className='fail' >
              <h3
                children="Файл ://"
                className='Name' />
            </div>
          </div>
        </div>


        <div className='block-right'>
          <h3
            children="Уровень 0: Нетренированный"
            className='level'
          />

          <h3 className='level2'> {Obcheie_znachenie}</h3>

          <div className='box'>
            <div> Жизненная сила - {Hiznenasila} </div>
            <div> Уклонение - {Yklonenie}</div>
            <div> Энергичность - {Energicnost}</div>
            <div> Сила - {Sila} <button onClick={onClickSila} className='button'> + </button> </div>
            <div className='predlevel'> Атака - {Ataka} <button onClick={onClickAtaka} className='button'> + </button> </div>
            <div> Ловкость - {Lovkost} <button onClick={onClickLovkost} className='button'> + </button> </div>
            <div className='predlevel'> Cтелс - {Stels} <button onClick={onClickStels} className='button'> + </button> </div>
            <div className='predlevel'> Стрельба из лука - {Strelba_is_lyka} <button onClick={onClickStrelba_is_lyka} className='button'> + </button> </div>
            <div> Интеллект - {Intelekt} <button onClick={onClickIntelekt} className='button'> + </button> </div>
            <div className='predlevel'> Обучаемость - {Obychaemost} <button onClick={onClickObychaemost} className='button'> + </button> </div>
            <div className='predlevel'> Выживание - {Vishivanie} <button onClick={onClickVishivanie} className='button'> + </button> </div>
            <div className='predlevel'> Медецина - {Medicina} <button onClick={onClickMedicina} className='button'> + </button> </div>
            <div> Харизма - {Harizma} <button onClick={onClicHarizma} className='button'> + </button> </div>
            <div className='predlevel'> Запугивание - {Zapygivanie} <button onClick={onClicZapygivanie} className='button'> + </button> </div>
            <div className='predlevel'> Проницательность - {Pronicatelnost} <button onClick={onClicPronicatelnost} className='button'> + </button> </div>
            <div className='predlevel'> Внешний вид - {Vnehnii_vid} <button onClick={onClicVnehnii_vid} className='button'> + </button> </div>
            <div className='predlevel'> Манипулирование - {Manipulirovanie} <button onClick={onClicManipulirovanie} className='button'> + </button> </div>

          </div>

        </div>










      </body>

    </div>
  );
}

export default App;
