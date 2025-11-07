// src/components/MapImages.js  ← zorg dat bestandsnaam en import exact matchen (hoofdletter M)

// builderblock component (let op: correct electric pad!)
import AlineSelecter from '../media/AlineSelecter.png';
import TlineSelecter from '../media/TlineSelecter.png';
import ClineSelecter from '../media/ClineSelecter.png';
import GlineSelecter from '../media/GlineSelecter.png';
import PlineSelecter from '../media/PlineSelecter.png';
import ClineElectricSelecter from '../media/ClineElectricSelecter.png';
import GlineElectricSelecter from '../media/GlineSelecter.png'; // ✅ was eerder fout
import PlineElectricSelecter from '../media/PlineElectricSelecter.png';

// verlichting
import battery from '../media/comp/battery.png';
import dynamo from '../media/comp/dynamo.png';
import reflector from '../media/comp/reflector.png';
import lezyne from '../media/comp/lezyne.png';
import buildin from '../media/comp/buildin.png';

// versnellingen
import een from '../media/comp/1.png';
import twee from '../media/comp/2.png';
import drie from '../media/comp/3.png';
import vier from '../media/comp/4.png';
import zes from '../media/comp/6.png';
import acht from '../media/comp/8.png';
import twaalf from '../media/comp/12.png';

// racks en mudguards
import mudgardcline from '../media/comp/mudgardcline.png';
import rackcline from '../media/comp/rackcline.png';
import norackaline from '../media/comp/norackaline.png';
import mudgardtline from '../media/comp/mudgardtline.png';
import noracktline from '../media/comp/noracktline.png';
import norackgline from '../media/comp/norackgline.png';
import rackgline from '../media/comp/rackgline.png';
import rackpline from '../media/comp/rackpline.png';
import mudgardpline from '../media/comp/mudgardpline.png';

// zadels
import standaardsaddle from '../media/comp/standaardsaddle.png';
import standaardwide from '../media/comp/standaardsaddle.png';
import c17 from '../media/comp/c17.png';
import b17 from '../media/comp/b17.png';
import carbonsaddle from '../media/comp/carbonsaddle.png';

// zadelhoogtes
import standaard from '../media/comp/hoogtestandaard.png';
import extended from '../media/comp/hoogteextended.png';
import telescopic from '../media/comp/hoogtetelescopic.png';

// sturen
import m from '../media/comp/m.png';
import h from '../media/comp/h.png';
import s from '../media/comp/s.png';

// kleuren
import bronzesky from '../media/comp/bronzesky.png';
import adventureorange from '../media/comp/adventureorange.png';
import blastedti from '../media/comp/blastedti.png';
import traildustwhite from '../media/comp/traildustwhite.png';
import midnightblackmetalic from '../media/comp/midnightblackmetalic.png';
import blackmatt from '../media/comp/blackmatt.png';
import glossblacklacquer from '../media/comp/glossblacklacquer.png';
import boltbluelacquer from '../media/comp/boltbluelacquer.png';
import forestgreen from '../media/comp/forestgreen.png';
import lunarice from '../media/comp/lunarice.png';
import dunesand from '../media/comp/dunesand.png';
import bumblebeeyellow from '../media/comp/bumblebeeyellow.png';
import racinggreen from '../media/comp/racinggreen.png';
import oceanblue from '../media/comp/oceanblue.png';
import papyruswhite from '../media/comp/papyruswhite.png';

// alle mappings
const mapImages = {
  // ✅ Modelleer afbeeldingen onder zowel de pure modelnaam als de *Selecter-key*
  ALine: AlineSelecter,
  TLine: TlineSelecter,
  CLine: ClineSelecter,
  GLine: GlineSelecter,
  PLine: PlineSelecter,
  CLineElectric: ClineElectricSelecter,
  GLineElectric: GlineElectricSelecter,
  PLineElectric: PlineElectricSelecter,

  ALineSelecter: AlineSelecter,
  TLineSelecter: TlineSelecter,
  CLineSelecter: ClineSelecter,
  GLineSelecter: GlineSelecter,
  PLineSelecter: PlineSelecter,
  CLineElectricSelecter: ClineElectricSelecter,
  GLineElectricSelecter: GlineElectricSelecter,
  PLineElectricSelecter: PlineElectricSelecter,

  // component-afbeeldingen
  battery, dynamo, reflector, lezyne, buildin,
  1: een, 2: twee, 3: drie, 4: vier, 6: zes, 8: acht, 12: twaalf,
  mudgardcline, rackcline, norackaline, mudgardtline,
  noracktline, norackgline, rackgline, rackpline, mudgardpline,
  standaardsaddle, standaardwide, c17, b17, carbonsaddle,
  standaard, extended, telescopic,
  m, h, s,
  bronzesky, adventureorange, blastedti, traildustwhite, midnightblackmetalic,
  blackmatt, glossblacklacquer, boltbluelacquer, forestgreen, lunarice,
  dunesand, bumblebeeyellow, racinggreen, oceanblue, papyruswhite
};

export default mapImages;
