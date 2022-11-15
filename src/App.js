import './App.css';
import logo from './slike/logo.png';
import juznivetar from './slike/juzni_vetar.jpg';
import juznivetarlogo from './slike/juzni_vetar.png';
import uklincu from './slike/u_klincu.jpg';
import balkanika from './slike/balkanika.jpg';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function App() {
  const data = {
    labels: ['Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota','Nedjelja'],
    datasets: [{
      data: [100,200,300,400,500,600,700],
      pointBorderColor: 'orange',
      pointBackgroundColor: 'yellow',
      borderColor: 'red',
    }]
  };
  const options = {};
  return(
    <div className = "mainBox">
      <div className = "navbar">
        <div className = "navbarLeft">
          <div className = "navbarSpecItem">
            <img className = "logoBox" src = {logo}/>
            <p className = "navbarText">BalkanTV</p>
          </div>
          <div className = "navbarItem">
            <button className = "navbarBtn"><i class = "fa fa-home"> </i> Home</button>
            <button className = "navbarBtn"><i class="fa-brands fa-discord"> </i> Discord</button>
            <button className = "navbarBtn"><i class="fa-brands fa-instagram"> </i> Instagram</button>
            <button className = "navbarBtn"><i class="fa-solid fa-frog"> </i> Donate</button>
          </div>
        </div>
        <div className = "navbarRight">
          <input className = "searchInput" placeholder = "Search..."></input>
        </div>
      </div>
      <div className = "parentBox">
        <div className = "childBox">
          <p className = "leftBoxTitle"><b>#</b>1 Trending</p>
          <img className = "leftChildImg" src = {juznivetar}/>
        </div>
        <div className = "childBox">
          <p className = "rightTitle">BalkanTV - Official</p>
          <p className = "rightSubtitle">Dobrodošli na BalkanTV, mjesto gdje možete pronaći najpoznatije Balkanske serije.</p>
          <button className = "serieslistBtn">LISTA SERIJA</button>
        </div>
      </div>
      <div className = "titleArea">
        <p className = "titleContent">Balkan<b>TV</b> - Balkanske serije</p>
      </div>
      <div className = "seriesList">
        <div className = "serieItem">
          <div className = "serieBoxLeft">
            <img className = "serieImgLogo" src = {juznivetarlogo} /> 
          </div>
          <div className = "serieBoxRight">
            <p className = "serieName"><b>Ime serije: </b> Južni Vetar 1</p>
            <p className = "serieDescription"><b>Opis serije: </b> U drugom nastavku filma radnja ide u smjeru legalizacije poslova, Maraš u želji da proširi i ozakoni posao, nezakonito stečeni novac ulaže u legalne poslove i započinje suradnju s državom. Tražeći povoljnu priliku, sa svojim vjernim Baćom odlazi u istočnu Srbiju. Tamo saznaje vijesti zbog kojih će biti prisiljen promijeniti planove i vratiti se na ulicu.</p>
            <p className = "seriesYear"><b>Godina serije: </b> 2021</p>
            <button className = "watchBtn">Pogledaj</button>
          </div>
        </div>
        <div className = "serieItem">
          <div className = "serieBoxLeft">
            <img className = "serieImgLogo" src = {uklincu} /> 
          </div>
          <div className = "serieBoxRight">
            <p className = "serieName"><b>Ime serije: </b> U Klinču</p>
            <p className = "serieDescription"><b>Opis serije: </b> Serija U klinču, nastala je u zajedničkoj produkciji Radio-televizije Srbije i produkcijske kuće „Režim“. Iskrena priča o odrastanju, o trenucima u kojima mladi ljudi na prelasku iz srednjoškolskog perioda postaju studenti, zaposleni ljudi, koji počinju da ostvaruju ili se razočaravaju u svoje ambicije.</p>
            <p className = "seriesYear"><b>Godina serije: </b> 2022</p>
            <button className = "watchBtn">Pogledaj</button>
          </div>
        </div>
        <div className = "serieItem">
          <div className = "serieBoxLeft">
            <img className = "serieImgLogo" src = {balkanika} /> 
          </div>
          <div className = "serieBoxRight">
            <p className = "serieName"><b>Ime serije: </b> Balkanika</p>
            <p className = "serieDescription"><b>Opis serije: </b> Serija U klinču, nastala je u zajedničkoj produkciji Radio-televizije Srbije i produkcijske kuće „Režim“. Iskrena priča o odrastanju, o trenucima u kojima mladi ljudi na prelasku iz srednjoškolskog perioda postaju studenti, zaposleni ljudi, koji počinju da ostvaruju ili se razočaravaju u svoje ambicije.</p>
            <p className = "seriesYear"><b>Godina serije: </b> 2020</p>
            <button className = "watchBtn">Pogledaj</button>
          </div>
        </div>
        <div className = "serieItem">
          <div className = "serieBoxLeft">
            <img className = "serieImgLogo" src = {juznivetar} /> 
          </div>
          <div className = "serieBoxRight">
            <p className = "serieName"><b>Ime serije: </b> Južni Vetar2 - Ubrzanje</p>
            <p className = "serieDescription"><b>Opis serije: </b> U drugom nastavku filma radnja ide u smjeru legalizacije poslova, Maraš u želji da proširi i ozakoni posao, nezakonito stečeni novac ulaže u legalne poslove i započinje suradnju s državom. Tražeći povoljnu priliku, sa svojim vjernim Baćom odlazi u istočnu Srbiju. Tamo saznaje vijesti zbog kojih će biti prisiljen promijeniti planove i vratiti se na ulicu.</p>
            <p className = "seriesYear"><b>Godina serije: </b> 2022</p>
            <button className = "watchBtn">Pogledaj</button>
          </div>
        </div>
        <div className = "serieItem">
          <div className = "serieBoxLeft">
            <img className = "serieImgLogo" src = {uklincu} /> 
          </div>
          <div className = "serieBoxRight">
            <p className = "serieName"><b>Ime serije: </b> U Klinču</p>
            <p className = "serieDescription"><b>Opis serije: </b> Serija U klinču, nastala je u zajedničkoj produkciji Radio-televizije Srbije i produkcijske kuće „Režim“. Iskrena priča o odrastanju, o trenucima u kojima mladi ljudi na prelasku iz srednjoškolskog perioda postaju studenti, zaposleni ljudi, koji počinju da ostvaruju ili se razočaravaju u svoje ambicije.</p>
            <p className = "seriesYear"><b>Godina serije: </b> 2022</p>
            <button className = "watchBtn">Pogledaj</button>
          </div>
        </div>
      </div>
      <div className = "statsArea">
        <div className = "statsAreaLeft">
          <div className = "statsAreaTop">
            <p className = "statsAreaTitle">Balkan<b>TV</b> - Analitike</p>
            <div style = {{width: '100%', height: '100%',}}>
              <Line data = {data} options = {options}></Line>
            </div>
          </div>
          <div className = "statsAreaBottom">
            <div className = "statsBottomBoxes">
              <div className = "statsBottomLeft">
                <div id = "plavi">
                  <i class="fa-solid fa-desktop"></i>
                </div>
              </div>
              <div className = "statsBottomRight">
                <div className = "statsRightTop">
                  <div id = "statsRightTopLeft">
                    Desktop korisnici
                  </div>
                  <div id = "statsRightTopRight">
                    <p id = "bplavi">32%</p>
                  </div>
                </div>
                <div className = "statsRightBottom">
                  <div className = "statsDesignBox">
                    <div id = "postotakPlavi"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "statsBottomBoxes">
              <div className = "statsBottomLeft">
                <div id = "crveni">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
              </div>
              <div className = "statsBottomRight">
                <div className = "statsRightTop">
                  <div id = "statsRightTopLeft">
                    Desktop korisnici
                  </div>
                  <div id = "statsRightTopRight">
                    <p id = "bcrveni">81%</p>
                  </div>
                </div>
                <div className = "statsRightBottom">
                  <div className = "statsDesignBox">
                    <div id = "postotakCrveni"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "statsAreaRight">
          <div className = "statsBox">
            <div className = "statsBoxTitle">
              TOTALNE ANALITIKE
            </div>
            <div className = "statsInfoBox">
              <div className = "statsInfoLeft">
                <div className = "statsIconBox">
                  <i className="fa-solid fa-users"></i>
                </div>
              </div>
              <div class = "statsInfoRight">
              </div>
            </div>
            <div className = "statsInfoBox">
              <div className = "statsInfoLeft">
                <div className = "statsIconBox">
                  <i className="fa-solid fa-robot"></i>
                </div>
              </div>
              <div className = "statsInfoRight">
                <div clasName = "">
                  
                </div>
              </div>
            </div>
            <div className = "statsInfoBox">
              <div className = "statsInfoLeft">
                <div className = "statsIconBox">
                  <i className="fa-solid fa-user"></i>
                </div>
              </div>
              <div className = "statsInfoRight">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = "endArea">
        <div className = "copyrightBox">
        BalkanTV - Copyright © 2022, made by ugrijaniStr. All rights reserved
        </div>
        <div className = "socialMediaBox">
          <div className = "socialMediaTitle">

          </div>
          <div className = "socialMediaItems">
            <ul>
              <li id = "discord">
                <i className="fa-brands fa-discord"></i>
              </li>
              <li id = "instagram">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li id = "tiktok">
                <i className="fa-brands fa-tiktok"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;