/***************************** 
 * Two_Step_Task_Legacy Test *
 *****************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'two_step_task_legacy';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from choose_list
// custom function for determining transitions

function get_practice(transprob) {
    var rand = Math.random();
    var randComparison = rand > transprob;
    var trans_p = Number(randComparison) ^ 2;
    return trans_p;
}


function get(transprob) {
    var rand = Math.random();
    var randComparison = rand > transprob;
    var trans = Number(randComparison) ^ 2;
    return [trans, rand];
}


// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(list_choiceRoutineBegin());
flowScheduler.add(list_choiceRoutineEachFrame());
flowScheduler.add(list_choiceRoutineEnd());
const loop_tutorial_01LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_tutorial_01LoopBegin(loop_tutorial_01LoopScheduler));
flowScheduler.add(loop_tutorial_01LoopScheduler);
flowScheduler.add(loop_tutorial_01LoopEnd);
const loop_try_01LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_try_01LoopBegin(loop_try_01LoopScheduler));
flowScheduler.add(loop_try_01LoopScheduler);
flowScheduler.add(loop_try_01LoopEnd);
const loop_tutorial_02LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_tutorial_02LoopBegin(loop_tutorial_02LoopScheduler));
flowScheduler.add(loop_tutorial_02LoopScheduler);
flowScheduler.add(loop_tutorial_02LoopEnd);
const loop_try_02LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_try_02LoopBegin(loop_try_02LoopScheduler));
flowScheduler.add(loop_try_02LoopScheduler);
flowScheduler.add(loop_try_02LoopEnd);
flowScheduler.add(TUTORIAL_3_1RoutineBegin());
flowScheduler.add(TUTORIAL_3_1RoutineEachFrame());
flowScheduler.add(TUTORIAL_3_1RoutineEnd());
flowScheduler.add(TUTORIAL_3_2RoutineBegin());
flowScheduler.add(TUTORIAL_3_2RoutineEachFrame());
flowScheduler.add(TUTORIAL_3_2RoutineEnd());
const loop_try_03LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_try_03LoopBegin(loop_try_03LoopScheduler));
flowScheduler.add(loop_try_03LoopScheduler);
flowScheduler.add(loop_try_03LoopEnd);
const loop_tutorial_04LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_tutorial_04LoopBegin(loop_tutorial_04LoopScheduler));
flowScheduler.add(loop_tutorial_04LoopScheduler);
flowScheduler.add(loop_tutorial_04LoopEnd);
flowScheduler.add(count_practice_goldRoutineBegin());
flowScheduler.add(count_practice_goldRoutineEachFrame());
flowScheduler.add(count_practice_goldRoutineEnd());
const loop_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_practiceLoopBegin(loop_practiceLoopScheduler));
flowScheduler.add(loop_practiceLoopScheduler);
flowScheduler.add(loop_practiceLoopEnd);
flowScheduler.add(TUT_22RoutineBegin());
flowScheduler.add(TUT_22RoutineEachFrame());
flowScheduler.add(TUT_22RoutineEnd());
flowScheduler.add(TUT_23RoutineBegin());
flowScheduler.add(TUT_23RoutineEachFrame());
flowScheduler.add(TUT_23RoutineEnd());
flowScheduler.add(TUT_24RoutineBegin());
flowScheduler.add(TUT_24RoutineEachFrame());
flowScheduler.add(TUT_24RoutineEnd());
flowScheduler.add(TUT_25RoutineBegin());
flowScheduler.add(TUT_25RoutineEachFrame());
flowScheduler.add(TUT_25RoutineEnd());
flowScheduler.add(TUT_26RoutineBegin());
flowScheduler.add(TUT_26RoutineEachFrame());
flowScheduler.add(TUT_26RoutineEnd());
flowScheduler.add(TUT_27RoutineBegin());
flowScheduler.add(TUT_27RoutineEachFrame());
flowScheduler.add(TUT_27RoutineEnd());
flowScheduler.add(TUT_28RoutineBegin());
flowScheduler.add(TUT_28RoutineEachFrame());
flowScheduler.add(TUT_28RoutineEnd());
const loop_expLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_expLoopBegin(loop_expLoopScheduler));
flowScheduler.add(loop_expLoopScheduler);
flowScheduler.add(loop_expLoopEnd);
flowScheduler.add(total_goldRoutineBegin());
flowScheduler.add(total_goldRoutineEachFrame());
flowScheduler.add(total_goldRoutineEnd());
flowScheduler.add(transition_to_postRoutineBegin());
flowScheduler.add(transition_to_postRoutineEachFrame());
flowScheduler.add(transition_to_postRoutineEnd());
const post_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(post_loopLoopBegin(post_loopLoopScheduler));
flowScheduler.add(post_loopLoopScheduler);
flowScheduler.add(post_loopLoopEnd);
flowScheduler.add(transitionRoutineBegin());
flowScheduler.add(transitionRoutineEachFrame());
flowScheduler.add(transitionRoutineEnd());
const probe_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(probe_loopLoopBegin(probe_loopLoopScheduler));
flowScheduler.add(probe_loopLoopScheduler);
flowScheduler.add(probe_loopLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/earth.jpg', 'path': 'resources/earth.jpg'},
    {'name': 'resources/blank.png', 'path': 'resources/blank.png'},
    {'name': 'resources/tutalien4_a1.png', 'path': 'resources/tutalien4_a1.png'},
    {'name': 'resources/post_purpleplanet.jpg', 'path': 'resources/post_purpleplanet.jpg'},
    {'name': 'resources/tutrocket2_d.png', 'path': 'resources/tutrocket2_d.png'},
    {'name': 'resources/alien4_a1.png', 'path': 'resources/alien4_a1.png'},
    {'name': 'resources/payoff/payoff_1.csv', 'path': 'resources/payoff/payoff_1.csv'},
    {'name': 'resources/tutalien2_s.png', 'path': 'resources/tutalien2_s.png'},
    {'name': 'resources/tutalien2_d.png', 'path': 'resources/tutalien2_d.png'},
    {'name': 'resources/t.png', 'path': 'resources/t.png'},
    {'name': 'resources/tutalien1_a2.png', 'path': 'resources/tutalien1_a2.png'},
    {'name': 'resources/rocket1_sp.png', 'path': 'resources/rocket1_sp.png'},
    {'name': 'resources/post_test.xlsx', 'path': 'resources/post_test.xlsx'},
    {'name': 'resources/alien4_sp.png', 'path': 'resources/alien4_sp.png'},
    {'name': 'resources/tutalien3_d.png', 'path': 'resources/tutalien3_d.png'},
    {'name': 'resources/rocket2_norm.png', 'path': 'resources/rocket2_norm.png'},
    {'name': 'resources/TUTORIAL_02.csv', 'path': 'resources/TUTORIAL_02.csv'},
    {'name': 'resources/tutalien3_n.png', 'path': 'resources/tutalien3_n.png'},
    {'name': 'resources/alien1_a2.png', 'path': 'resources/alien1_a2.png'},
    {'name': 'resources/alien1_deact.png', 'path': 'resources/alien1_deact.png'},
    {'name': 'resources/payoff/payoff_3.csv', 'path': 'resources/payoff/payoff_3.csv'},
    {'name': 'resources/rocket1_a2.png', 'path': 'resources/rocket1_a2.png'},
    {'name': 'resources/tutalien3_s.png', 'path': 'resources/tutalien3_s.png'},
    {'name': 'resources/tutalien2_a2.png', 'path': 'resources/tutalien2_a2.png'},
    {'name': 'resources/alien4_deact.png', 'path': 'resources/alien4_deact.png'},
    {'name': 'resources/rocket1_deact.png', 'path': 'resources/rocket1_deact.png'},
    {'name': 'resources/alien1_a1.png', 'path': 'resources/alien1_a1.png'},
    {'name': 'resources/alien1_norm.png', 'path': 'resources/alien1_norm.png'},
    {'name': 'resources/tutalien4_s.png', 'path': 'resources/tutalien4_s.png'},
    {'name': 'resources/tutalien1_a1.png', 'path': 'resources/tutalien1_a1.png'},
    {'name': 'resources/tutalien4_n.png', 'path': 'resources/tutalien4_n.png'},
    {'name': 'resources/TUTORIAL_01.xlsx', 'path': 'resources/TUTORIAL_01.xlsx'},
    {'name': 'resources/rocket1_a1.png', 'path': 'resources/rocket1_a1.png'},
    {'name': 'resources/payoff/payoff_test1.csv', 'path': 'resources/payoff/payoff_test1.csv'},
    {'name': 'resources/rocket2_a2.png', 'path': 'resources/rocket2_a2.png'},
    {'name': 'resources/rocket2_a1.png', 'path': 'resources/rocket2_a1.png'},
    {'name': 'resources/tutrocket1_d.png', 'path': 'resources/tutrocket1_d.png'},
    {'name': 'resources/tutrocket2_a1.png', 'path': 'resources/tutrocket2_a1.png'},
    {'name': 'resources/alien3_sp.png', 'path': 'resources/alien3_sp.png'},
    {'name': 'resources/alien2_a2.png', 'path': 'resources/alien2_a2.png'},
    {'name': 'resources/tutrocket2_a2.png', 'path': 'resources/tutrocket2_a2.png'},
    {'name': 'resources/tutrocket1_a2.png', 'path': 'resources/tutrocket1_a2.png'},
    {'name': 'resources/alien3_a1.png', 'path': 'resources/alien3_a1.png'},
    {'name': 'resources/alien3_deact.png', 'path': 'resources/alien3_deact.png'},
    {'name': 'resources/rocket2_sp.png', 'path': 'resources/rocket2_sp.png'},
    {'name': 'resources/tutrocket2_n.png', 'path': 'resources/tutrocket2_n.png'},
    {'name': 'resources/tutrocket1_s.png', 'path': 'resources/tutrocket1_s.png'},
    {'name': 'resources/TRY_02.csv', 'path': 'resources/TRY_02.csv'},
    {'name': 'resources/alien2_deact.png', 'path': 'resources/alien2_deact.png'},
    {'name': 'resources/TUTORIAL_04.csv', 'path': 'resources/TUTORIAL_04.csv'},
    {'name': 'resources/purpleplanet.jpg', 'path': 'resources/purpleplanet.jpg'},
    {'name': 'resources/tutalien3_a2.png', 'path': 'resources/tutalien3_a2.png'},
    {'name': 'resources/tutalien1_n.png', 'path': 'resources/tutalien1_n.png'},
    {'name': 'resources/redplanet.jpg', 'path': 'resources/redplanet.jpg'},
    {'name': 'resources/black.png', 'path': 'resources/black.png'},
    {'name': 'resources/payoff/payoff_4.csv', 'path': 'resources/payoff/payoff_4.csv'},
    {'name': 'resources/tutalien2_a1.png', 'path': 'resources/tutalien2_a1.png'},
    {'name': 'resources/rocket2_deact.png', 'path': 'resources/rocket2_deact.png'},
    {'name': 'resources/tutalien1_d.png', 'path': 'resources/tutalien1_d.png'},
    {'name': 'resources/payoff/payoff_2.csv', 'path': 'resources/payoff/payoff_2.csv'},
    {'name': 'resources/tutalien2_n.png', 'path': 'resources/tutalien2_n.png'},
    {'name': 'resources/tutalien3_a1.png', 'path': 'resources/tutalien3_a1.png'},
    {'name': 'resources/payoff/payoff_test3.csv', 'path': 'resources/payoff/payoff_test3.csv'},
    {'name': 'resources/tutalien4_a2.png', 'path': 'resources/tutalien4_a2.png'},
    {'name': 'resources/alien2_sp.png', 'path': 'resources/alien2_sp.png'},
    {'name': 'resources/alien4_norm.png', 'path': 'resources/alien4_norm.png'},
    {'name': 'resources/alien3_norm.png', 'path': 'resources/alien3_norm.png'},
    {'name': 'resources/tutrocket2_s.png', 'path': 'resources/tutrocket2_s.png'},
    {'name': 'resources/alien2_a1.png', 'path': 'resources/alien2_a1.png'},
    {'name': 'resources/payoff/payoff_test2.csv', 'path': 'resources/payoff/payoff_test2.csv'},
    {'name': 'resources/tutalien4_d.png', 'path': 'resources/tutalien4_d.png'},
    {'name': 'resources/tutyellowplanet.jpg', 'path': 'resources/tutyellowplanet.jpg'},
    {'name': 'resources/alien3_a2.png', 'path': 'resources/alien3_a2.png'},
    {'name': 'resources/alien1_sp.png', 'path': 'resources/alien1_sp.png'},
    {'name': 'resources/alien4_a2.png', 'path': 'resources/alien4_a2.png'},
    {'name': 'resources/probe_alien_order.xlsx', 'path': 'resources/probe_alien_order.xlsx'},
    {'name': 'resources/tutgreenplanet.jpg', 'path': 'resources/tutgreenplanet.jpg'},
    {'name': 'resources/tutalien1_s.png', 'path': 'resources/tutalien1_s.png'},
    {'name': 'resources/tutrocket1_n.png', 'path': 'resources/tutrocket1_n.png'},
    {'name': 'resources/tutrocket1_a1.png', 'path': 'resources/tutrocket1_a1.png'},
    {'name': 'resources/post_redplanet.jpg', 'path': 'resources/post_redplanet.jpg'},
    {'name': 'resources/empty_token.png', 'path': 'resources/empty_token.png'},
    {'name': 'resources/alien2_norm.png', 'path': 'resources/alien2_norm.png'},
    {'name': 'resources/rocket1_norm.png', 'path': 'resources/rocket1_norm.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var list_choiceClock;
var payoffList;
var payoff;
var ROCKET_P1;
var ROCKET_P1A;
var ROCKET_P1B;
var ROCKET_P1DEACT;
var ROCKET_P1SP;
var ROCKET_P2;
var ROCKET_P2DEACT;
var ROCKET_P2A;
var ROCKET_P2B;
var ROCKET_P2SP;
var GREENPLANET;
var YELLOWPLANET;
var ALIEN_P1;
var ALIEN_P2;
var ALIEN_P3;
var ALIEN_P4;
var ALIEN_P1DEACT;
var ALIEN_P2DEACT;
var ALIEN_P3DEACT;
var ALIEN_P4DEACT;
var ALIEN_P1A;
var ALIEN_P1B;
var ALIEN_P2A;
var ALIEN_P2B;
var ALIEN_P3A;
var ALIEN_P3B;
var ALIEN_P4A;
var ALIEN_P4B;
var ALIEN_P1SP;
var ALIEN_P2SP;
var ALIEN_P3SP;
var ALIEN_P4SP;
var ROCKETBL;
var ROCKETBLA;
var ROCKETBLB;
var ROCKETBLDEACT;
var ROCKETGR;
var ROCKETGRDEACT;
var ROCKETGRA;
var ROCKETGRB;
var ROCKETGRSP;
var ROCKETBLSP;
var PURPLEPLANET;
var REDPLANET;
var EARTH;
var BLACK;
var ALIENA;
var ALIENB;
var ALIENC;
var ALIEND;
var ALIENA_DEACT;
var ALIENB_DEACT;
var ALIENC_DEACT;
var ALIEND_DEACT;
var ALIENAA;
var ALIENAB;
var ALIENBA;
var ALIENBB;
var ALIENCA;
var ALIENCB;
var ALIENDA;
var ALIENDB;
var ALIENASP;
var ALIENBSP;
var ALIENCSP;
var ALIENDSP;
var SPACEGOLD;
var SPACEGOLD_OLD;
var EMPTYTOKEN;
var _pj;
var static_probability_1;
var static_probability_2;
var static_probability_3;
var static_probability_4;
var TUTORIAL_01Clock;
var background_1;
var text_Tut_01;
var key_resp_Tut_01;
var l_img_Tut_01;
var r_img_Tut_01;
var middle_image_1;
var TRY_01Clock;
var background_Try_01;
var l_img_Try_01;
var r_img_Try_01;
var key_resp_Try_01;
var TRY_01_selectionClock;
var background_Try_01_selection;
var l_img_Try_01_selection1;
var l_img_Try_01_selection2;
var r_img_Try_01_selection1;
var r_img_Try_01_selection2;
var m_img_Try_01_selection1;
var m_img_Try_01_selection2;
var TUTORIAL_02Clock;
var text_Tut;
var key_resp_Tut;
var middle_image_2;
var TRY_02Clock;
var background_Try_02;
var l_img_Try_02;
var r_img_Try_02;
var key_resp_Try_02;
var TRY_02_selectionClock;
var background_Try_02_selection;
var m_img_Try_02_selection1;
var m_img_Try_02_selection2;
var l_img_Try_02_selection1;
var l_img_Try_02_selection2;
var r_img_Try_02_selection1;
var r_img_Try_02_selection2;
var img_Try_02_result;
var gold_Try_02;
var TUTORIAL_3_1Clock;
var text_Tut_3;
var key_resp_Tut_3;
var middle_image_3;
var TUTORIAL_3_2Clock;
var text_Tut_3_2;
var key_resp_Tut_3_2;
var TRY_03Clock;
var background_Try_03;
var l_img_Try_03;
var r_img_Try_03;
var key_resp_Try_03;
var TRY_03_selectionClock;
var background_Try_03_selection;
var m_img_Try_03_selection1;
var m_img_Try_03_selection2;
var l_img_Try_03_selection1;
var l_img_Try_03_selection2;
var r_img_Try_03_selection1;
var r_img_Try_03_selection2;
var img_Try_03_result;
var gold_Try_03;
var TUTORIAL_04Clock;
var text_Try_04;
var middle_image_04;
var l_img_Try_04;
var r_img_Try_04;
var key_resp_Try_04;
var count_practice_goldClock;
var PRACTICE_rocketClock;
var background_practice;
var l_rocket_practice;
var r_rocket_practice;
var key_resp_practice;
var PRACTICE_rocket_selectionClock;
var background_practice_selection;
var l_img_practice_selection1;
var l_img_practice_selection2;
var r_img_practice_selection1;
var r_img_practice_selection2;
var m_img_practice_selection1;
var m_img_practice_selection2;
var PRACTICE_alienClock;
var bg;
var imgcenter_practice;
var left_alien_practice;
var right_alien_practice;
var key_resp_practice_alien;
var PRACTICE_alien_selectionClock;
var background_practice_alien_selection;
var m_img_practice_alien_selection1;
var m_img_practice_alien_selection2;
var l_img_practice_alien_selection1;
var l_img_practice_alien_selection2;
var r_img_practice_alien_selection1;
var r_img_practice_alien_selection2;
var img_practice_alien_result;
var gold_practice;
var TUT_22Clock;
var text_TUT_22;
var key_resp_TUT_22;
var TUT_23Clock;
var text_show_practice_gold;
var key_resp_show_practice_gold;
var TUT_24Clock;
var text_TUT_24;
var key_resp_TUT_24;
var TUT_25Clock;
var text_TUT_25;
var key_resp_TUT_25;
var TUT_26Clock;
var text_TUT_26;
var key_resp_TUT_26;
var TUT_27Clock;
var text_TUT_27;
var key_resp_TUT_27;
var TUT_28Clock;
var text_TUT_28;
var key_resp_28;
var EXP_rocketClock;
var background_exp;
var l_rocket_exp;
var r_rocket_exp;
var key_resp_exp;
var EXP_rocket_selectionClock;
var background_exp_selection;
var l_img_exp_selection1;
var l_img_exp_selection2;
var r_img_exp_selection1;
var r_img_exp_selection2;
var m_img_exp_selection1;
var m_img_exp_selection2;
var EXP_alienClock;
var bg_exp;
var imgcenter_exp;
var left_alien_exp;
var right_alien_exp;
var key_resp_exp_alien;
var EXP_alien_selectionClock;
var background_exp_alien_selection;
var m_img_exp_alien_selection1;
var m_img_exp_alien_selection2;
var l_img_exp_alien_selection1;
var l_img_exp_alien_selection2;
var r_img_exp_alien_selection1;
var r_img_exp_alien_selection2;
var img_exp_alien_result;
var gold_exp;
var total_goldClock;
var text_show_exp_gold;
var key_resp_show_total_gold;
var transition_to_postClock;
var key_transition_to_post;
var text_transition_to_post;
var post_taskClock;
var key_resp;
var img_up_l;
var img_up_r;
var img_down_l;
var img_down_l2;
var image_down_r;
var img_down_r2;
var up_text;
var down_text;
var slider;
var transitionClock;
var text_transition;
var key_resp_transition;
var PROBEClock;
var probe_question;
var l_img_probe;
var r_img_probe;
var key_resp_probe;
var endClock;
var key_end;
var text_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "list_choice"
  list_choiceClock = new util.Clock();
  // Run 'Begin Experiment' code from choose_list
  // determine payoff list
  payoffList = ['1', '2', '3', '4', '11', '12', '13', '21', '22', '23', '31', '32', '33', '41', '42', '43'];
  payoff = payoffList[Math.floor(Math.random() * payoffList.length)];
  
  // payoff list will be saved in the main experiment loop
  
  // define stimuli
  ROCKET_P1 = "resources/tutrocket1_n.png";
  ROCKET_P1A = "resources/tutrocket1_a1.png";
  ROCKET_P1B = "resources/tutrocket1_a2.png";
  ROCKET_P1DEACT = "resources/tutrocket1_d.png";
  ROCKET_P1SP = "resources/tutrocket1_s.png";
  ROCKET_P2 = "resources/tutrocket2_n.png";
  ROCKET_P2DEACT = "resources/tutrocket2_d.png";
  ROCKET_P2A = "resources/tutrocket2_a1.png";
  ROCKET_P2B = "resources/tutrocket2_a2.png";
  ROCKET_P2SP = "resources/tutrocket2_s.png";
  GREENPLANET = "resources/tutgreenplanet.jpg";
  YELLOWPLANET = "resources/tutyellowplanet.jpg";
  ALIEN_P1 = "resources/tutalien1_n.png";
  ALIEN_P2 = "resources/tutalien2_n.png";
  ALIEN_P3 = "resources/tutalien3_n.png";
  ALIEN_P4 = "resources/tutalien4_n.png";
  ALIEN_P1DEACT = "resources/tutalien1_d.png";
  ALIEN_P2DEACT = "resources/tutalien2_d.png";
  ALIEN_P3DEACT = "resources/tutalien3_d.png";
  ALIEN_P4DEACT = "resources/tutalien4_d.png";
  ALIEN_P1A = "resources/tutalien1_a1.png";
  ALIEN_P1B = "resources/tutalien1_a2.png";
  ALIEN_P2A = "resources/tutalien2_a1.png";
  ALIEN_P2B = "resources/tutalien2_a2.png";
  ALIEN_P3A = "resources/tutalien3_a1.png";
  ALIEN_P3B = "resources/tutalien3_a2.png";
  ALIEN_P4A = "resources/tutalien4_a1.png";
  ALIEN_P4B = "resources/tutalien4_a2.png";
  ALIEN_P1SP = "resources/tutalien1_s.png";
  ALIEN_P2SP = "resources/tutalien2_s.png";
  ALIEN_P3SP = "resources/tutalien3_s.png";
  ALIEN_P4SP = "resources/tutalien4_s.png";
  ROCKETBL = "resources/rocket1_norm.png";
  ROCKETBLA = "resources/rocket1_a1.png";
  ROCKETBLB = "resources/rocket1_a2.png";
  ROCKETBLDEACT = "resources/rocket1_deact.png";
  ROCKETGR = "resources/rocket2_norm.png";
  ROCKETGRDEACT = "resources/rocket2_deact.png";
  ROCKETGRA = "resources/rocket2_a1.png";
  ROCKETGRB = "resources/rocket2_a2.png";
  ROCKETGRSP = "resources/rocket2_sp.png";
  ROCKETBLSP = "resources/rocket1_sp.png";
  PURPLEPLANET = "resources/purpleplanet.jpg";
  REDPLANET = "resources/redplanet.jpg";
  EARTH = "resources/earth.jpg";
  BLACK = "resources/black.png";
  ALIENA = "resources/alien1_norm.png";
  ALIENB = "resources/alien2_norm.png";
  ALIENC = "resources/alien3_norm.png";
  ALIEND = "resources/alien4_norm.png";
  ALIENA_DEACT = "resources/alien1_deact.png";
  ALIENB_DEACT = "resources/alien2_deact.png";
  ALIENC_DEACT = "resources/alien3_deact.png";
  ALIEND_DEACT = "resources/alien4_deact.png";
  ALIENAA = "resources/alien1_a1.png";
  ALIENAB = "resources/alien1_a2.png";
  ALIENBA = "resources/alien2_a1.png";
  ALIENBB = "resources/alien2_a2.png";
  ALIENCA = "resources/alien3_a1.png";
  ALIENCB = "resources/alien3_a2.png";
  ALIENDA = "resources/alien4_a1.png";
  ALIENDB = "resources/alien4_a2.png";
  ALIENASP = "resources/alien1_sp.png";
  ALIENBSP = "resources/alien2_sp.png";
  ALIENCSP = "resources/alien3_sp.png";
  ALIENDSP = "resources/alien4_sp.png";
  SPACEGOLD = "resources/t.png";
  SPACEGOLD_OLD = "resources/t_old.png";
  EMPTYTOKEN = "resources/empty_token.png";
  
  // Run 'Begin Experiment' code from code_save_static_p
  var _pj;
  function _pj_snippets(container) {
      function in_es6(left, right) {
          if (((right instanceof Array) || ((typeof right) === "string"))) {
              return (right.indexOf(left) > (- 1));
          } else {
              if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                  return right.has(left);
              } else {
                  return (left in right);
              }
          }
      }
      container["in_es6"] = in_es6;
      return container;
  }
  _pj = {};
  _pj_snippets(_pj);
  if (_pj.in_es6(payoff, ["1", "2", "11", "12", "13", "21", "22", "23"])) {
      static_probability_1 = 0.3;
      static_probability_2 = 0.7;
      if (_pj.in_es6(payoff, ["1", "11", "12", "13"])) {
          static_probability_3 = 0.6;
          static_probability_4 = 0.4;
      } else {
          if (_pj.in_es6(payoff, ["2", "21", "22", "23"])) {
              static_probability_3 = 0.4;
              static_probability_4 = 0.6;
          }
      }
  } else {
      if (_pj.in_es6(payoff, ["3", "4", "31", "32", "33", "41", "42", "43"])) {
          static_probability_1 = 0.7;
          static_probability_2 = 0.3;
          if (_pj.in_es6(payoff, ["3", "31", "32", "33"])) {
              static_probability_3 = 0.4;
              static_probability_4 = 0.6;
          } else {
              if (_pj.in_es6(payoff, ["4", "41", "42", "43"])) {
                  static_probability_3 = 0.6;
                  static_probability_4 = 0.4;
              }
          }
      }
  }
  
  // Initialize components for Routine "TUTORIAL_01"
  TUTORIAL_01Clock = new util.Clock();
  background_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.1)], size : [1, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_Tut_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Tut_01',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_Tut_01 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  l_img_Tut_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Tut_01', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  r_img_Tut_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Tut_01', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  middle_image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'middle_image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "TRY_01"
  TRY_01Clock = new util.Clock();
  background_Try_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_Try_01', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  l_img_Try_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_01', units : undefined, 
    image : ALIEN_P1, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  r_img_Try_01 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_01', units : undefined, 
    image : ALIEN_P2, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_Try_01 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TRY_01_selection"
  TRY_01_selectionClock = new util.Clock();
  background_Try_01_selection = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_Try_01_selection', units : undefined, 
    image : 'resources/tutgreenplanet.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  l_img_Try_01_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_01_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  l_img_Try_01_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_01_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  r_img_Try_01_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_01_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  r_img_Try_01_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_01_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  m_img_Try_01_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_Try_01_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  m_img_Try_01_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_Try_01_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "TUTORIAL_02"
  TUTORIAL_02Clock = new util.Clock();
  text_Tut = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Tut',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_Tut = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  middle_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'middle_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.02)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TRY_02"
  TRY_02Clock = new util.Clock();
  background_Try_02 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_Try_02', units : undefined, 
    image : 'resources/tutgreenplanet.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  l_img_Try_02 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_02', units : undefined, 
    image : ALIEN_P1, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  r_img_Try_02 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_02', units : undefined, 
    image : ALIEN_P2, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_Try_02 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TRY_02_selection"
  TRY_02_selectionClock = new util.Clock();
  background_Try_02_selection = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_Try_02_selection', units : undefined, 
    image : 'resources/tutgreenplanet.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  m_img_Try_02_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_Try_02_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  m_img_Try_02_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_Try_02_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  l_img_Try_02_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_02_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  l_img_Try_02_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_02_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  r_img_Try_02_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_02_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  r_img_Try_02_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_02_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  img_Try_02_result = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_Try_02_result', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  gold_Try_02 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_Try_02', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  // Initialize components for Routine "TUTORIAL_3_1"
  TUTORIAL_3_1Clock = new util.Clock();
  text_Tut_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Tut_3',
    text: "See, this alien shared treasure most of the times you asked, but not every time. Every alien has treasure in its mine, but they can't share every time. Some will be more likely to share because it is easier to dig right now.\n\nPress SPACE to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_Tut_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  middle_image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'middle_image_3', units : undefined, 
    image : 'resources/tutalien1_n.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TUTORIAL_3_2"
  TUTORIAL_3_2Clock = new util.Clock();
  text_Tut_3_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Tut_3_2',
    text: 'You can practice choosing now. You have 20 choices to try to figure out which alien has a good mine. Remember, key X is for the left alien, and key M is for the right alien.\n\nClick SPACE to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_Tut_3_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TRY_03"
  TRY_03Clock = new util.Clock();
  background_Try_03 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_Try_03', units : undefined, 
    image : 'resources/tutgreenplanet.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  l_img_Try_03 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_03', units : undefined, 
    image : ALIEN_P1, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  r_img_Try_03 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_03', units : undefined, 
    image : ALIEN_P2, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_Try_03 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TRY_03_selection"
  TRY_03_selectionClock = new util.Clock();
  background_Try_03_selection = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_Try_03_selection', units : undefined, 
    image : 'resources/tutgreenplanet.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  m_img_Try_03_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_Try_03_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  m_img_Try_03_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_Try_03_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  l_img_Try_03_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_03_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  l_img_Try_03_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_03_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  r_img_Try_03_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_03_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  r_img_Try_03_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_03_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  img_Try_03_result = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_Try_03_result', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  gold_Try_03 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_Try_03', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  // Initialize components for Routine "TUTORIAL_04"
  TUTORIAL_04Clock = new util.Clock();
  text_Try_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Try_04',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  middle_image_04 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'middle_image_04', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.16)], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  l_img_Try_04 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_Try_04', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  r_img_Try_04 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_Try_04', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp_Try_04 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "count_practice_gold"
  count_practice_goldClock = new util.Clock();
  // Initialize components for Routine "PRACTICE_rocket"
  PRACTICE_rocketClock = new util.Clock();
  background_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  l_rocket_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_rocket_practice', units : undefined, 
    image : 'resources/tutrocket1_n.png', mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  r_rocket_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_rocket_practice', units : undefined, 
    image : 'resources/tutrocket2_n.png', mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PRACTICE_rocket_selection"
  PRACTICE_rocket_selectionClock = new util.Clock();
  background_practice_selection = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_practice_selection', units : undefined, 
    image : 'resources/earth.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  l_img_practice_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_practice_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  l_img_practice_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_practice_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  r_img_practice_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_practice_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  r_img_practice_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_practice_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  m_img_practice_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_practice_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  m_img_practice_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_practice_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "PRACTICE_alien"
  PRACTICE_alienClock = new util.Clock();
  bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  imgcenter_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imgcenter_practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  left_alien_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_alien_practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  right_alien_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_alien_practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp_practice_alien = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PRACTICE_alien_selection"
  PRACTICE_alien_selectionClock = new util.Clock();
  background_practice_alien_selection = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_practice_alien_selection', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  m_img_practice_alien_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_practice_alien_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  m_img_practice_alien_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_practice_alien_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  l_img_practice_alien_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_practice_alien_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  l_img_practice_alien_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_practice_alien_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  r_img_practice_alien_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_practice_alien_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  r_img_practice_alien_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_practice_alien_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  img_practice_alien_result = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_practice_alien_result', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  gold_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  // Initialize components for Routine "TUT_22"
  TUT_22Clock = new util.Clock();
  text_TUT_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TUT_22',
    text: 'That is the end of the practice game.\n\nPress SPACE to see how you did...',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_TUT_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TUT_23"
  TUT_23Clock = new util.Clock();
  text_show_practice_gold = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_show_practice_gold',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_show_practice_gold = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TUT_24"
  TUT_24Clock = new util.Clock();
  text_TUT_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TUT_24',
    text: "Okay, that is nearly the end of the tutorial! In the real game, the planets, aliens, and spaceships will be new colors, but the rules will be the same. The game is hard, so you will need to concentrate, but don't be afraid to trust your instincts. Here are three hints on how to play the game.\n\nPress SPACE to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_TUT_24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TUT_25"
  TUT_25Clock = new util.Clock();
  text_TUT_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TUT_25',
    text: 'Hint #1:\nRemember which aliens have treasure. The aliens will appear on different sides from trial to trial, so it is important to remember what each alien looks like. How good a mine is changes slowly, so an alien that has a lot of treasure to share now, will probably be able to share a lot in the near future. However, this might slowly change during the game, as those aliens with a good mine might get to a part of the mine that is hard to dig and those with little to share might find easier treasure to dig. Stay focused to pick up which alien is the best to ask for treasure at each point in time, as this way you will earn the most treasure.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_TUT_25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TUT_26"
  TUT_26Clock = new util.Clock();
  text_TUT_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TUT_26',
    text: "Hint #2: \nRemember, each alien has its own mine.  Just because one alien has a bad mine and can't share very often, does not mean another has a good mine. Also, there are no funny patterns in how an alien shares, like every other time you ask, or depending on which spaceship you took. The aliens are not trying to trick you.\n\nPress SPACE to continue.\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_TUT_26 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TUT_27"
  TUT_27Clock = new util.Clock();
  text_TUT_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TUT_27',
    text: 'Hint #3:\nThe spaceship you choose is important because often an alien on one planet may be better than the ones on another planet. You can find more treasure by finding the spaceship that is most likely to take you to right planet.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_TUT_27 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TUT_28"
  TUT_28Clock = new util.Clock();
  text_TUT_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_TUT_28',
    text: "OK! Now you know how to play. In the real game we'll count how many pieces of space treasure you find and pay you real money for it at the end.\n\nReady?  Now its time to play the game!  Good luck space traveler!\n \nPress SPACE to play.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_28 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EXP_rocket"
  EXP_rocketClock = new util.Clock();
  background_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_exp', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  l_rocket_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_rocket_exp', units : undefined, 
    image : 'resources/rocket1_norm.png', mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  r_rocket_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_rocket_exp', units : undefined, 
    image : 'resources/rocket2_norm.png', mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp_exp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EXP_rocket_selection"
  EXP_rocket_selectionClock = new util.Clock();
  background_exp_selection = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_exp_selection', units : undefined, 
    image : 'resources/earth.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  l_img_exp_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_exp_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  l_img_exp_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_exp_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  r_img_exp_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_exp_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  r_img_exp_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_exp_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  m_img_exp_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_exp_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  m_img_exp_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_exp_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "EXP_alien"
  EXP_alienClock = new util.Clock();
  bg_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_exp', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  imgcenter_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imgcenter_exp', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  left_alien_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_alien_exp', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  right_alien_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_alien_exp', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  key_resp_exp_alien = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EXP_alien_selection"
  EXP_alien_selectionClock = new util.Clock();
  background_exp_alien_selection = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_exp_alien_selection', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  m_img_exp_alien_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_exp_alien_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  m_img_exp_alien_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'm_img_exp_alien_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  l_img_exp_alien_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_exp_alien_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  l_img_exp_alien_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_exp_alien_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  r_img_exp_alien_selection1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_exp_alien_selection1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  r_img_exp_alien_selection2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_exp_alien_selection2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  img_exp_alien_result = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_exp_alien_result', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  gold_exp = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_exp', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "total_gold"
  total_goldClock = new util.Clock();
  text_show_exp_gold = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_show_exp_gold',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_show_total_gold = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "transition_to_post"
  transition_to_postClock = new util.Clock();
  key_transition_to_post = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_transition_to_post = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_transition_to_post',
    text: 'Answer the following questions based on your experience playing this game.\n\nPress SPACE to continue.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "post_task"
  post_taskClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  img_up_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_up_l', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  img_up_r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_up_r', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, 0.15], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  img_down_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_down_l', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  img_down_l2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_down_l2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.1), (- 0.27)], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_down_r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_down_r', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.1, (- 0.27)], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  img_down_r2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_down_r2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.27)], size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  up_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'up_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  down_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'down_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [0.9, 0.03], pos: [0, (- 0.2)], ori: 0.0, units: 'height',
    labels: ["Very Unlikely\n0%", "Unsure \n50%", "Very Likely\n100%"], fontSize: 0.03, ticks: [0, 50, 100],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  // Initialize components for Routine "transition"
  transitionClock = new util.Clock();
  text_transition = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_transition',
    text: 'Now we will begin the follow up experiment. The aim of this task is to select the alien in each pair which is more likely to have spacegold. This task will be played only once, without any practice.  Again, press X for left item and M for right item.\n\nPress SPACE  to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_transition = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PROBE"
  PROBEClock = new util.Clock();
  probe_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_question',
    text: 'Which alien was more likely to share gold?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  l_img_probe = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_img_probe', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  r_img_probe = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r_img_probe', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.25)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_probe = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  key_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: "This is the end of experiment. Thank you for participating! \n\nDO NOT close this window yet. After pressing SPACE, wait until the message 'Thank you for your patience' appears on your screen. Then click 'Ok' with your mouse to close the experiment. \n\nPress SPACE to close the experiment.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var list_choiceComponents;
function list_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'list_choice' ---
    t = 0;
    list_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    list_choiceComponents = [];
    
    for (const thisComponent of list_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function list_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'list_choice' ---
    // get current time
    t = list_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of list_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function list_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'list_choice' ---
    for (const thisComponent of list_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "list_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loop_tutorial_01;
function loop_tutorial_01LoopBegin(loop_tutorial_01LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_tutorial_01 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/TUTORIAL_01.xlsx',
      seed: undefined, name: 'loop_tutorial_01'
    });
    psychoJS.experiment.addLoop(loop_tutorial_01); // add the loop to the experiment
    currentLoop = loop_tutorial_01;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_tutorial_01 of loop_tutorial_01) {
      snapshot = loop_tutorial_01.getSnapshot();
      loop_tutorial_01LoopScheduler.add(importConditions(snapshot));
      loop_tutorial_01LoopScheduler.add(TUTORIAL_01RoutineBegin(snapshot));
      loop_tutorial_01LoopScheduler.add(TUTORIAL_01RoutineEachFrame());
      loop_tutorial_01LoopScheduler.add(TUTORIAL_01RoutineEnd(snapshot));
      loop_tutorial_01LoopScheduler.add(loop_tutorial_01LoopEndIteration(loop_tutorial_01LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_tutorial_01LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_tutorial_01);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_tutorial_01LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_try_01;
function loop_try_01LoopBegin(loop_try_01LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_try_01 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_try_01'
    });
    psychoJS.experiment.addLoop(loop_try_01); // add the loop to the experiment
    currentLoop = loop_try_01;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_try_01 of loop_try_01) {
      snapshot = loop_try_01.getSnapshot();
      loop_try_01LoopScheduler.add(importConditions(snapshot));
      loop_try_01LoopScheduler.add(TRY_01RoutineBegin(snapshot));
      loop_try_01LoopScheduler.add(TRY_01RoutineEachFrame());
      loop_try_01LoopScheduler.add(TRY_01RoutineEnd(snapshot));
      loop_try_01LoopScheduler.add(TRY_01_selectionRoutineBegin(snapshot));
      loop_try_01LoopScheduler.add(TRY_01_selectionRoutineEachFrame());
      loop_try_01LoopScheduler.add(TRY_01_selectionRoutineEnd(snapshot));
      loop_try_01LoopScheduler.add(loop_try_01LoopEndIteration(loop_try_01LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_try_01LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_try_01);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_try_01LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_tutorial_02;
function loop_tutorial_02LoopBegin(loop_tutorial_02LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_tutorial_02 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/TUTORIAL_02.csv',
      seed: undefined, name: 'loop_tutorial_02'
    });
    psychoJS.experiment.addLoop(loop_tutorial_02); // add the loop to the experiment
    currentLoop = loop_tutorial_02;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_tutorial_02 of loop_tutorial_02) {
      snapshot = loop_tutorial_02.getSnapshot();
      loop_tutorial_02LoopScheduler.add(importConditions(snapshot));
      loop_tutorial_02LoopScheduler.add(TUTORIAL_02RoutineBegin(snapshot));
      loop_tutorial_02LoopScheduler.add(TUTORIAL_02RoutineEachFrame());
      loop_tutorial_02LoopScheduler.add(TUTORIAL_02RoutineEnd(snapshot));
      loop_tutorial_02LoopScheduler.add(loop_tutorial_02LoopEndIteration(loop_tutorial_02LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_tutorial_02LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_tutorial_02);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_tutorial_02LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_try_02;
function loop_try_02LoopBegin(loop_try_02LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_try_02 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/TRY_02.csv',
      seed: undefined, name: 'loop_try_02'
    });
    psychoJS.experiment.addLoop(loop_try_02); // add the loop to the experiment
    currentLoop = loop_try_02;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_try_02 of loop_try_02) {
      snapshot = loop_try_02.getSnapshot();
      loop_try_02LoopScheduler.add(importConditions(snapshot));
      loop_try_02LoopScheduler.add(TRY_02RoutineBegin(snapshot));
      loop_try_02LoopScheduler.add(TRY_02RoutineEachFrame());
      loop_try_02LoopScheduler.add(TRY_02RoutineEnd(snapshot));
      loop_try_02LoopScheduler.add(TRY_02_selectionRoutineBegin(snapshot));
      loop_try_02LoopScheduler.add(TRY_02_selectionRoutineEachFrame());
      loop_try_02LoopScheduler.add(TRY_02_selectionRoutineEnd(snapshot));
      loop_try_02LoopScheduler.add(loop_try_02LoopEndIteration(loop_try_02LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_try_02LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_try_02);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_try_02LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_try_03;
function loop_try_03LoopBegin(loop_try_03LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_try_03 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_try_03'
    });
    psychoJS.experiment.addLoop(loop_try_03); // add the loop to the experiment
    currentLoop = loop_try_03;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_try_03 of loop_try_03) {
      snapshot = loop_try_03.getSnapshot();
      loop_try_03LoopScheduler.add(importConditions(snapshot));
      loop_try_03LoopScheduler.add(TRY_03RoutineBegin(snapshot));
      loop_try_03LoopScheduler.add(TRY_03RoutineEachFrame());
      loop_try_03LoopScheduler.add(TRY_03RoutineEnd(snapshot));
      loop_try_03LoopScheduler.add(TRY_03_selectionRoutineBegin(snapshot));
      loop_try_03LoopScheduler.add(TRY_03_selectionRoutineEachFrame());
      loop_try_03LoopScheduler.add(TRY_03_selectionRoutineEnd(snapshot));
      loop_try_03LoopScheduler.add(loop_try_03LoopEndIteration(loop_try_03LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_try_03LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_try_03);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_try_03LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_tutorial_04;
function loop_tutorial_04LoopBegin(loop_tutorial_04LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_tutorial_04 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/TUTORIAL_04.csv',
      seed: undefined, name: 'loop_tutorial_04'
    });
    psychoJS.experiment.addLoop(loop_tutorial_04); // add the loop to the experiment
    currentLoop = loop_tutorial_04;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_tutorial_04 of loop_tutorial_04) {
      snapshot = loop_tutorial_04.getSnapshot();
      loop_tutorial_04LoopScheduler.add(importConditions(snapshot));
      loop_tutorial_04LoopScheduler.add(TUTORIAL_04RoutineBegin(snapshot));
      loop_tutorial_04LoopScheduler.add(TUTORIAL_04RoutineEachFrame());
      loop_tutorial_04LoopScheduler.add(TUTORIAL_04RoutineEnd(snapshot));
      loop_tutorial_04LoopScheduler.add(loop_tutorial_04LoopEndIteration(loop_tutorial_04LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_tutorial_04LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_tutorial_04);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_tutorial_04LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_practice;
function loop_practiceLoopBegin(loop_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/payoff/payoff_test1.csv',
      seed: undefined, name: 'loop_practice'
    });
    psychoJS.experiment.addLoop(loop_practice); // add the loop to the experiment
    currentLoop = loop_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_practice of loop_practice) {
      snapshot = loop_practice.getSnapshot();
      loop_practiceLoopScheduler.add(importConditions(snapshot));
      loop_practiceLoopScheduler.add(PRACTICE_rocketRoutineBegin(snapshot));
      loop_practiceLoopScheduler.add(PRACTICE_rocketRoutineEachFrame());
      loop_practiceLoopScheduler.add(PRACTICE_rocketRoutineEnd(snapshot));
      loop_practiceLoopScheduler.add(PRACTICE_rocket_selectionRoutineBegin(snapshot));
      loop_practiceLoopScheduler.add(PRACTICE_rocket_selectionRoutineEachFrame());
      loop_practiceLoopScheduler.add(PRACTICE_rocket_selectionRoutineEnd(snapshot));
      const alien_practiceLoopScheduler = new Scheduler(psychoJS);
      loop_practiceLoopScheduler.add(alien_practiceLoopBegin(alien_practiceLoopScheduler, snapshot));
      loop_practiceLoopScheduler.add(alien_practiceLoopScheduler);
      loop_practiceLoopScheduler.add(alien_practiceLoopEnd);
      loop_practiceLoopScheduler.add(loop_practiceLoopEndIteration(loop_practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var alien_practice;
function alien_practiceLoopBegin(alien_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    alien_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: show_alien, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'alien_practice'
    });
    psychoJS.experiment.addLoop(alien_practice); // add the loop to the experiment
    currentLoop = alien_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAlien_practice of alien_practice) {
      snapshot = alien_practice.getSnapshot();
      alien_practiceLoopScheduler.add(importConditions(snapshot));
      alien_practiceLoopScheduler.add(PRACTICE_alienRoutineBegin(snapshot));
      alien_practiceLoopScheduler.add(PRACTICE_alienRoutineEachFrame());
      alien_practiceLoopScheduler.add(PRACTICE_alienRoutineEnd(snapshot));
      alien_practiceLoopScheduler.add(PRACTICE_alien_selectionRoutineBegin(snapshot));
      alien_practiceLoopScheduler.add(PRACTICE_alien_selectionRoutineEachFrame());
      alien_practiceLoopScheduler.add(PRACTICE_alien_selectionRoutineEnd(snapshot));
      alien_practiceLoopScheduler.add(alien_practiceLoopEndIteration(alien_practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function alien_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(alien_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function alien_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function loop_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_exp;
function loop_expLoopBegin(loop_expLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_exp = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("resources/payoff/payoff_" + payoff) + ".csv"),
      seed: undefined, name: 'loop_exp'
    });
    psychoJS.experiment.addLoop(loop_exp); // add the loop to the experiment
    currentLoop = loop_exp;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_exp of loop_exp) {
      snapshot = loop_exp.getSnapshot();
      loop_expLoopScheduler.add(importConditions(snapshot));
      loop_expLoopScheduler.add(EXP_rocketRoutineBegin(snapshot));
      loop_expLoopScheduler.add(EXP_rocketRoutineEachFrame());
      loop_expLoopScheduler.add(EXP_rocketRoutineEnd(snapshot));
      loop_expLoopScheduler.add(EXP_rocket_selectionRoutineBegin(snapshot));
      loop_expLoopScheduler.add(EXP_rocket_selectionRoutineEachFrame());
      loop_expLoopScheduler.add(EXP_rocket_selectionRoutineEnd(snapshot));
      const alienLoopScheduler = new Scheduler(psychoJS);
      loop_expLoopScheduler.add(alienLoopBegin(alienLoopScheduler, snapshot));
      loop_expLoopScheduler.add(alienLoopScheduler);
      loop_expLoopScheduler.add(alienLoopEnd);
      loop_expLoopScheduler.add(loop_expLoopEndIteration(loop_expLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var alien;
function alienLoopBegin(alienLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    alien = new TrialHandler({
      psychoJS: psychoJS,
      nReps: show_alien, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'alien'
    });
    psychoJS.experiment.addLoop(alien); // add the loop to the experiment
    currentLoop = alien;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAlien of alien) {
      snapshot = alien.getSnapshot();
      alienLoopScheduler.add(importConditions(snapshot));
      alienLoopScheduler.add(EXP_alienRoutineBegin(snapshot));
      alienLoopScheduler.add(EXP_alienRoutineEachFrame());
      alienLoopScheduler.add(EXP_alienRoutineEnd(snapshot));
      alienLoopScheduler.add(EXP_alien_selectionRoutineBegin(snapshot));
      alienLoopScheduler.add(EXP_alien_selectionRoutineEachFrame());
      alienLoopScheduler.add(EXP_alien_selectionRoutineEnd(snapshot));
      alienLoopScheduler.add(alienLoopEndIteration(alienLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function alienLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(alien);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function alienLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function loop_expLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_exp);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_expLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var post_loop;
function post_loopLoopBegin(post_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    post_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/post_test.xlsx',
      seed: undefined, name: 'post_loop'
    });
    psychoJS.experiment.addLoop(post_loop); // add the loop to the experiment
    currentLoop = post_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPost_loop of post_loop) {
      snapshot = post_loop.getSnapshot();
      post_loopLoopScheduler.add(importConditions(snapshot));
      post_loopLoopScheduler.add(post_taskRoutineBegin(snapshot));
      post_loopLoopScheduler.add(post_taskRoutineEachFrame());
      post_loopLoopScheduler.add(post_taskRoutineEnd(snapshot));
      post_loopLoopScheduler.add(post_loopLoopEndIteration(post_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function post_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(post_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function post_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var probe_loop;
function probe_loopLoopBegin(probe_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    probe_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/probe_alien_order.xlsx',
      seed: undefined, name: 'probe_loop'
    });
    psychoJS.experiment.addLoop(probe_loop); // add the loop to the experiment
    currentLoop = probe_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisProbe_loop of probe_loop) {
      snapshot = probe_loop.getSnapshot();
      probe_loopLoopScheduler.add(importConditions(snapshot));
      probe_loopLoopScheduler.add(PROBERoutineBegin(snapshot));
      probe_loopLoopScheduler.add(PROBERoutineEachFrame());
      probe_loopLoopScheduler.add(PROBERoutineEnd(snapshot));
      probe_loopLoopScheduler.add(probe_loopLoopEndIteration(probe_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function probe_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(probe_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function probe_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_Tut_01_allKeys;
var TUTORIAL_01Components;
function TUTORIAL_01RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUTORIAL_01' ---
    t = 0;
    TUTORIAL_01Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    background_1.setImage(("resources/" + background));
    text_Tut_01.setText(instructions);
    key_resp_Tut_01.keys = undefined;
    key_resp_Tut_01.rt = undefined;
    _key_resp_Tut_01_allKeys = [];
    l_img_Tut_01.setImage(("resources/" + left_image));
    r_img_Tut_01.setImage(("resources/" + right_image));
    middle_image_1.setImage(("resources/" + middle_image));
    // keep track of which components have finished
    TUTORIAL_01Components = [];
    TUTORIAL_01Components.push(background_1);
    TUTORIAL_01Components.push(text_Tut_01);
    TUTORIAL_01Components.push(key_resp_Tut_01);
    TUTORIAL_01Components.push(l_img_Tut_01);
    TUTORIAL_01Components.push(r_img_Tut_01);
    TUTORIAL_01Components.push(middle_image_1);
    
    for (const thisComponent of TUTORIAL_01Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUTORIAL_01RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUTORIAL_01' ---
    // get current time
    t = TUTORIAL_01Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_1* updates
    if (t >= 0.0 && background_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_1.tStart = t;  // (not accounting for frame time here)
      background_1.frameNStart = frameN;  // exact frame index
      
      background_1.setAutoDraw(true);
    }

    
    // *text_Tut_01* updates
    if (t >= 0.0 && text_Tut_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Tut_01.tStart = t;  // (not accounting for frame time here)
      text_Tut_01.frameNStart = frameN;  // exact frame index
      
      text_Tut_01.setAutoDraw(true);
    }

    
    // *key_resp_Tut_01* updates
    if (t >= 0.0 && key_resp_Tut_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Tut_01.tStart = t;  // (not accounting for frame time here)
      key_resp_Tut_01.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Tut_01.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut_01.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut_01.clearEvents(); });
    }

    if (key_resp_Tut_01.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Tut_01.getKeys({keyList: ['space', 'escape'], waitRelease: false});
      _key_resp_Tut_01_allKeys = _key_resp_Tut_01_allKeys.concat(theseKeys);
      if (_key_resp_Tut_01_allKeys.length > 0) {
        key_resp_Tut_01.keys = _key_resp_Tut_01_allKeys[_key_resp_Tut_01_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Tut_01.rt = _key_resp_Tut_01_allKeys[_key_resp_Tut_01_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *l_img_Tut_01* updates
    if (t >= 0.0 && l_img_Tut_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Tut_01.tStart = t;  // (not accounting for frame time here)
      l_img_Tut_01.frameNStart = frameN;  // exact frame index
      
      l_img_Tut_01.setAutoDraw(true);
    }

    
    // *r_img_Tut_01* updates
    if (t >= 0.0 && r_img_Tut_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Tut_01.tStart = t;  // (not accounting for frame time here)
      r_img_Tut_01.frameNStart = frameN;  // exact frame index
      
      r_img_Tut_01.setAutoDraw(true);
    }

    
    // *middle_image_1* updates
    if (t >= 0.0 && middle_image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      middle_image_1.tStart = t;  // (not accounting for frame time here)
      middle_image_1.frameNStart = frameN;  // exact frame index
      
      middle_image_1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUTORIAL_01Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUTORIAL_01RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUTORIAL_01' ---
    for (const thisComponent of TUTORIAL_01Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Tut_01.stop();
    // the Routine "TUTORIAL_01" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_Try_01_allKeys;
var TRY_01Components;
function TRY_01RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TRY_01' ---
    t = 0;
    TRY_01Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    background_Try_01.setImage('resources/tutgreenplanet.jpg');
    key_resp_Try_01.keys = undefined;
    key_resp_Try_01.rt = undefined;
    _key_resp_Try_01_allKeys = [];
    // keep track of which components have finished
    TRY_01Components = [];
    TRY_01Components.push(background_Try_01);
    TRY_01Components.push(l_img_Try_01);
    TRY_01Components.push(r_img_Try_01);
    TRY_01Components.push(key_resp_Try_01);
    
    for (const thisComponent of TRY_01Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TRY_01RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TRY_01' ---
    // get current time
    t = TRY_01Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_Try_01* updates
    if (t >= 0.0 && background_Try_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_Try_01.tStart = t;  // (not accounting for frame time here)
      background_Try_01.frameNStart = frameN;  // exact frame index
      
      background_Try_01.setAutoDraw(true);
    }

    
    // *l_img_Try_01* updates
    if (t >= 0.0 && l_img_Try_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_01.tStart = t;  // (not accounting for frame time here)
      l_img_Try_01.frameNStart = frameN;  // exact frame index
      
      l_img_Try_01.setAutoDraw(true);
    }

    
    // *r_img_Try_01* updates
    if (t >= 0.0 && r_img_Try_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_01.tStart = t;  // (not accounting for frame time here)
      r_img_Try_01.frameNStart = frameN;  // exact frame index
      
      r_img_Try_01.setAutoDraw(true);
    }

    
    // *key_resp_Try_01* updates
    if (t >= 0.0 && key_resp_Try_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Try_01.tStart = t;  // (not accounting for frame time here)
      key_resp_Try_01.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Try_01.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_01.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_01.clearEvents(); });
    }

    if (key_resp_Try_01.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Try_01.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_Try_01_allKeys = _key_resp_Try_01_allKeys.concat(theseKeys);
      if (_key_resp_Try_01_allKeys.length > 0) {
        key_resp_Try_01.keys = _key_resp_Try_01_allKeys[_key_resp_Try_01_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Try_01.rt = _key_resp_Try_01_allKeys[_key_resp_Try_01_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TRY_01Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TRY_01RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TRY_01' ---
    for (const thisComponent of TRY_01Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Try_01.stop();
    // the Routine "TRY_01" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TRY_01_selectionComponents;
function TRY_01_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TRY_01_selection' ---
    t = 0;
    TRY_01_selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_Try_01
    if ((key_resp_Try_01.keys === "x")) {
        m_img_Try_01_selection1.setImage("resources/tutalien1_a1.png");
        m_img_Try_01_selection2.setImage("resources/tutalien1_a2.png");
        l_img_Try_01_selection1.setImage("resources/blank.png");
        l_img_Try_01_selection2.setImage("resources/blank.png");
        r_img_Try_01_selection1.setImage("resources/tutalien2_d.png");
        r_img_Try_01_selection2.setImage("resources/tutalien2_d.png");
    } else {
        if ((key_resp_Try_01.keys === "m")) {
            m_img_Try_01_selection1.setImage("resources/tutalien2_a1.png");
            m_img_Try_01_selection2.setImage("resources/tutalien2_a2.png");
            l_img_Try_01_selection1.setImage("resources/tutalien1_d.png");
            l_img_Try_01_selection2.setImage("resources/tutalien1_d.png");
            r_img_Try_01_selection1.setImage("resources/blank.png");
            r_img_Try_01_selection2.setImage("resources/blank.png");
        } else {
            l_img_Try_01_selection1.setImage("resources/tutalien1_d.png");
            l_img_Try_01_selection2.setImage("resources/tutalien1_d.png");
            r_img_Try_01_selection1.setImage("resources/tutalien2_d.png");
            r_img_Try_01_selection2.setImage("resources/tutalien2_d.png");
            m_img_Try_01_selection1.setImage("resources/blank.png");
            m_img_Try_01_selection2.setImage("resources/blank.png");
        }
    }
    
    // keep track of which components have finished
    TRY_01_selectionComponents = [];
    TRY_01_selectionComponents.push(background_Try_01_selection);
    TRY_01_selectionComponents.push(l_img_Try_01_selection1);
    TRY_01_selectionComponents.push(l_img_Try_01_selection2);
    TRY_01_selectionComponents.push(r_img_Try_01_selection1);
    TRY_01_selectionComponents.push(r_img_Try_01_selection2);
    TRY_01_selectionComponents.push(m_img_Try_01_selection1);
    TRY_01_selectionComponents.push(m_img_Try_01_selection2);
    
    for (const thisComponent of TRY_01_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function TRY_01_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TRY_01_selection' ---
    // get current time
    t = TRY_01_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_Try_01_selection* updates
    if (t >= 0.0 && background_Try_01_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_Try_01_selection.tStart = t;  // (not accounting for frame time here)
      background_Try_01_selection.frameNStart = frameN;  // exact frame index
      
      background_Try_01_selection.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_Try_01_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_Try_01_selection.setAutoDraw(false);
    }
    
    // *l_img_Try_01_selection1* updates
    if (t >= 0.0 && l_img_Try_01_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_01_selection1.tStart = t;  // (not accounting for frame time here)
      l_img_Try_01_selection1.frameNStart = frameN;  // exact frame index
      
      l_img_Try_01_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_Try_01_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_Try_01_selection1.setAutoDraw(false);
    }
    
    // *l_img_Try_01_selection2* updates
    if (t >= 0.5 && l_img_Try_01_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_01_selection2.tStart = t;  // (not accounting for frame time here)
      l_img_Try_01_selection2.frameNStart = frameN;  // exact frame index
      
      l_img_Try_01_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_Try_01_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_Try_01_selection2.setAutoDraw(false);
    }
    
    // *r_img_Try_01_selection1* updates
    if (t >= 0.0 && r_img_Try_01_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_01_selection1.tStart = t;  // (not accounting for frame time here)
      r_img_Try_01_selection1.frameNStart = frameN;  // exact frame index
      
      r_img_Try_01_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_Try_01_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_Try_01_selection1.setAutoDraw(false);
    }
    
    // *r_img_Try_01_selection2* updates
    if (t >= 0.5 && r_img_Try_01_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_01_selection2.tStart = t;  // (not accounting for frame time here)
      r_img_Try_01_selection2.frameNStart = frameN;  // exact frame index
      
      r_img_Try_01_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_Try_01_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_Try_01_selection2.setAutoDraw(false);
    }
    
    // *m_img_Try_01_selection1* updates
    if (t >= 0.0 && m_img_Try_01_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_Try_01_selection1.tStart = t;  // (not accounting for frame time here)
      m_img_Try_01_selection1.frameNStart = frameN;  // exact frame index
      
      m_img_Try_01_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_Try_01_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_Try_01_selection1.setAutoDraw(false);
    }
    
    // *m_img_Try_01_selection2* updates
    if (t >= 0.5 && m_img_Try_01_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_Try_01_selection2.tStart = t;  // (not accounting for frame time here)
      m_img_Try_01_selection2.frameNStart = frameN;  // exact frame index
      
      m_img_Try_01_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_Try_01_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_Try_01_selection2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TRY_01_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TRY_01_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TRY_01_selection' ---
    for (const thisComponent of TRY_01_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_Tut_allKeys;
var TUTORIAL_02Components;
function TUTORIAL_02RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUTORIAL_02' ---
    t = 0;
    TUTORIAL_02Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Tut.keys = undefined;
    key_resp_Tut.rt = undefined;
    _key_resp_Tut_allKeys = [];
    middle_image_2.setImage(("resources/" + middle_image));
    // keep track of which components have finished
    TUTORIAL_02Components = [];
    TUTORIAL_02Components.push(text_Tut);
    TUTORIAL_02Components.push(key_resp_Tut);
    TUTORIAL_02Components.push(middle_image_2);
    
    for (const thisComponent of TUTORIAL_02Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUTORIAL_02RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUTORIAL_02' ---
    // get current time
    t = TUTORIAL_02Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Tut* updates
    if (t >= 0.0 && text_Tut.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Tut.tStart = t;  // (not accounting for frame time here)
      text_Tut.frameNStart = frameN;  // exact frame index
      
      text_Tut.setAutoDraw(true);
    }

    
    if (text_Tut.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_Tut.setText(instructions, false);
    }
    
    // *key_resp_Tut* updates
    if (t >= 0.0 && key_resp_Tut.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Tut.tStart = t;  // (not accounting for frame time here)
      key_resp_Tut.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Tut.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut.clearEvents(); });
    }

    if (key_resp_Tut.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Tut.getKeys({keyList: ['space', 'escape'], waitRelease: false});
      _key_resp_Tut_allKeys = _key_resp_Tut_allKeys.concat(theseKeys);
      if (_key_resp_Tut_allKeys.length > 0) {
        key_resp_Tut.keys = _key_resp_Tut_allKeys[_key_resp_Tut_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Tut.rt = _key_resp_Tut_allKeys[_key_resp_Tut_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *middle_image_2* updates
    if (t >= 0.0 && middle_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      middle_image_2.tStart = t;  // (not accounting for frame time here)
      middle_image_2.frameNStart = frameN;  // exact frame index
      
      middle_image_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUTORIAL_02Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUTORIAL_02RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUTORIAL_02' ---
    for (const thisComponent of TUTORIAL_02Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Tut.stop();
    // the Routine "TUTORIAL_02" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_Try_02_allKeys;
var TRY_02Components;
function TRY_02RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TRY_02' ---
    t = 0;
    TRY_02Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Try_02.keys = undefined;
    key_resp_Try_02.rt = undefined;
    _key_resp_Try_02_allKeys = [];
    // keep track of which components have finished
    TRY_02Components = [];
    TRY_02Components.push(background_Try_02);
    TRY_02Components.push(l_img_Try_02);
    TRY_02Components.push(r_img_Try_02);
    TRY_02Components.push(key_resp_Try_02);
    
    for (const thisComponent of TRY_02Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TRY_02RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TRY_02' ---
    // get current time
    t = TRY_02Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_Try_02* updates
    if (t >= 0.0 && background_Try_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_Try_02.tStart = t;  // (not accounting for frame time here)
      background_Try_02.frameNStart = frameN;  // exact frame index
      
      background_Try_02.setAutoDraw(true);
    }

    
    // *l_img_Try_02* updates
    if (t >= 0.0 && l_img_Try_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_02.tStart = t;  // (not accounting for frame time here)
      l_img_Try_02.frameNStart = frameN;  // exact frame index
      
      l_img_Try_02.setAutoDraw(true);
    }

    
    // *r_img_Try_02* updates
    if (t >= 0.0 && r_img_Try_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_02.tStart = t;  // (not accounting for frame time here)
      r_img_Try_02.frameNStart = frameN;  // exact frame index
      
      r_img_Try_02.setAutoDraw(true);
    }

    
    // *key_resp_Try_02* updates
    if (t >= 0.0 && key_resp_Try_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Try_02.tStart = t;  // (not accounting for frame time here)
      key_resp_Try_02.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Try_02.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_02.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_02.clearEvents(); });
    }

    if (key_resp_Try_02.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Try_02.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_Try_02_allKeys = _key_resp_Try_02_allKeys.concat(theseKeys);
      if (_key_resp_Try_02_allKeys.length > 0) {
        key_resp_Try_02.keys = _key_resp_Try_02_allKeys[_key_resp_Try_02_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Try_02.rt = _key_resp_Try_02_allKeys[_key_resp_Try_02_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TRY_02Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TRY_02RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TRY_02' ---
    for (const thisComponent of TRY_02Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Try_02.stop();
    // the Routine "TRY_02" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TRY_02_selectionComponents;
function TRY_02_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TRY_02_selection' ---
    t = 0;
    TRY_02_selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_Try_02
    if ((key_resp_Try_02.keys === "x")) {
        m_img_Try_02_selection1.setImage("resources/tutalien1_a1.png");
        m_img_Try_02_selection2.setImage("resources/tutalien1_a2.png");
        l_img_Try_02_selection1.setImage("resources/blank.png");
        l_img_Try_02_selection2.setImage("resources/blank.png");
        r_img_Try_02_selection1.setImage("resources/tutalien2_d.png");
        r_img_Try_02_selection2.setImage("resources/tutalien2_d.png");
        if ((key_resp_Try_02.keys === try_list)) {
            img_Try_02_result.setImage("resources/tutalien1_n.png");
            gold_Try_02.setImage("resources/t.png");
        } else {
            img_Try_02_result.setImage("resources/tutalien1_n.png");
            gold_Try_02.setImage("resources/blank.png");
        }
    } else {
        if ((key_resp_Try_02.keys === "m")) {
            l_img_Try_02_selection1.setImage("resources/tutalien1_d.png");
            l_img_Try_02_selection2.setImage("resources/tutalien1_d.png");
            m_img_Try_02_selection1.setImage("resources/tutalien2_a1.png");
            m_img_Try_02_selection2.setImage("resources/tutalien2_a2.png");
            r_img_Try_02_selection1.setImage("resources/blank.png");
            r_img_Try_02_selection2.setImage("resources/blank.png");
            if ((key_resp_Try_02.keys === try_list)) {
                img_Try_02_result.setImage("resources/tutalien2_n.png");
                gold_Try_02.setImage("resources/t.png");
            } else {
                img_Try_02_result.setImage("resources/tutalien2_n.png");
                gold_Try_02.setImage("resources/blank.png");
            }
        } else {
            l_img_Try_02_selection1.setImage("resources/tutalien1_n.png");
            l_img_Try_02_selection2.setImage("resources/tutalien1_n.png");
            r_img_Try_02_selection1.setImage("resources/tutalien2_n.png");
            r_img_Try_02_selection2.setImage("resources/tutalien2_n.png");
            m_img_Try_02_selection1.setImage("resources/blank.png");
            m_img_Try_02_selection2.setImage("resources/blank.png");
            img_Try_02_result.setImage("resources/blank.png");
            gold_Try_02.setImage("resources/blank.png");
        }
    }
    
    // keep track of which components have finished
    TRY_02_selectionComponents = [];
    TRY_02_selectionComponents.push(background_Try_02_selection);
    TRY_02_selectionComponents.push(m_img_Try_02_selection1);
    TRY_02_selectionComponents.push(m_img_Try_02_selection2);
    TRY_02_selectionComponents.push(l_img_Try_02_selection1);
    TRY_02_selectionComponents.push(l_img_Try_02_selection2);
    TRY_02_selectionComponents.push(r_img_Try_02_selection1);
    TRY_02_selectionComponents.push(r_img_Try_02_selection2);
    TRY_02_selectionComponents.push(img_Try_02_result);
    TRY_02_selectionComponents.push(gold_Try_02);
    
    for (const thisComponent of TRY_02_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TRY_02_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TRY_02_selection' ---
    // get current time
    t = TRY_02_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_Try_02_selection* updates
    if (t >= 0.0 && background_Try_02_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_Try_02_selection.tStart = t;  // (not accounting for frame time here)
      background_Try_02_selection.frameNStart = frameN;  // exact frame index
      
      background_Try_02_selection.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_Try_02_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_Try_02_selection.setAutoDraw(false);
    }
    
    // *m_img_Try_02_selection1* updates
    if (t >= 0.0 && m_img_Try_02_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_Try_02_selection1.tStart = t;  // (not accounting for frame time here)
      m_img_Try_02_selection1.frameNStart = frameN;  // exact frame index
      
      m_img_Try_02_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_Try_02_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_Try_02_selection1.setAutoDraw(false);
    }
    
    // *m_img_Try_02_selection2* updates
    if (t >= 0.5 && m_img_Try_02_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_Try_02_selection2.tStart = t;  // (not accounting for frame time here)
      m_img_Try_02_selection2.frameNStart = frameN;  // exact frame index
      
      m_img_Try_02_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_Try_02_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_Try_02_selection2.setAutoDraw(false);
    }
    
    // *l_img_Try_02_selection1* updates
    if (t >= 0.0 && l_img_Try_02_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_02_selection1.tStart = t;  // (not accounting for frame time here)
      l_img_Try_02_selection1.frameNStart = frameN;  // exact frame index
      
      l_img_Try_02_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_Try_02_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_Try_02_selection1.setAutoDraw(false);
    }
    
    // *l_img_Try_02_selection2* updates
    if (t >= 0.5 && l_img_Try_02_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_02_selection2.tStart = t;  // (not accounting for frame time here)
      l_img_Try_02_selection2.frameNStart = frameN;  // exact frame index
      
      l_img_Try_02_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_Try_02_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_Try_02_selection2.setAutoDraw(false);
    }
    
    // *r_img_Try_02_selection1* updates
    if (t >= 0.0 && r_img_Try_02_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_02_selection1.tStart = t;  // (not accounting for frame time here)
      r_img_Try_02_selection1.frameNStart = frameN;  // exact frame index
      
      r_img_Try_02_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_Try_02_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_Try_02_selection1.setAutoDraw(false);
    }
    
    // *r_img_Try_02_selection2* updates
    if (t >= 0.5 && r_img_Try_02_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_02_selection2.tStart = t;  // (not accounting for frame time here)
      r_img_Try_02_selection2.frameNStart = frameN;  // exact frame index
      
      r_img_Try_02_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_Try_02_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_Try_02_selection2.setAutoDraw(false);
    }
    
    // *img_Try_02_result* updates
    if (t >= 0.91 && img_Try_02_result.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_Try_02_result.tStart = t;  // (not accounting for frame time here)
      img_Try_02_result.frameNStart = frameN;  // exact frame index
      
      img_Try_02_result.setAutoDraw(true);
    }

    frameRemains = 0.91 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img_Try_02_result.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img_Try_02_result.setAutoDraw(false);
    }
    
    // *gold_Try_02* updates
    if (t >= 1 && gold_Try_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_Try_02.tStart = t;  // (not accounting for frame time here)
      gold_Try_02.frameNStart = frameN;  // exact frame index
      
      gold_Try_02.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gold_Try_02.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gold_Try_02.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TRY_02_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TRY_02_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TRY_02_selection' ---
    for (const thisComponent of TRY_02_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_Tut_3_allKeys;
var TUTORIAL_3_1Components;
function TUTORIAL_3_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUTORIAL_3_1' ---
    t = 0;
    TUTORIAL_3_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Tut_3.keys = undefined;
    key_resp_Tut_3.rt = undefined;
    _key_resp_Tut_3_allKeys = [];
    // keep track of which components have finished
    TUTORIAL_3_1Components = [];
    TUTORIAL_3_1Components.push(text_Tut_3);
    TUTORIAL_3_1Components.push(key_resp_Tut_3);
    TUTORIAL_3_1Components.push(middle_image_3);
    
    for (const thisComponent of TUTORIAL_3_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUTORIAL_3_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUTORIAL_3_1' ---
    // get current time
    t = TUTORIAL_3_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Tut_3* updates
    if (t >= 0.0 && text_Tut_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Tut_3.tStart = t;  // (not accounting for frame time here)
      text_Tut_3.frameNStart = frameN;  // exact frame index
      
      text_Tut_3.setAutoDraw(true);
    }

    
    // *key_resp_Tut_3* updates
    if (t >= 0.0 && key_resp_Tut_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Tut_3.tStart = t;  // (not accounting for frame time here)
      key_resp_Tut_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Tut_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut_3.clearEvents(); });
    }

    if (key_resp_Tut_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Tut_3.getKeys({keyList: ['space', 'escape'], waitRelease: false});
      _key_resp_Tut_3_allKeys = _key_resp_Tut_3_allKeys.concat(theseKeys);
      if (_key_resp_Tut_3_allKeys.length > 0) {
        key_resp_Tut_3.keys = _key_resp_Tut_3_allKeys[_key_resp_Tut_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Tut_3.rt = _key_resp_Tut_3_allKeys[_key_resp_Tut_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *middle_image_3* updates
    if (t >= 0.0 && middle_image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      middle_image_3.tStart = t;  // (not accounting for frame time here)
      middle_image_3.frameNStart = frameN;  // exact frame index
      
      middle_image_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUTORIAL_3_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUTORIAL_3_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUTORIAL_3_1' ---
    for (const thisComponent of TUTORIAL_3_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Tut_3.stop();
    // the Routine "TUTORIAL_3_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_Tut_3_2_allKeys;
var TUTORIAL_3_2Components;
function TUTORIAL_3_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUTORIAL_3_2' ---
    t = 0;
    TUTORIAL_3_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Tut_3_2.keys = undefined;
    key_resp_Tut_3_2.rt = undefined;
    _key_resp_Tut_3_2_allKeys = [];
    // keep track of which components have finished
    TUTORIAL_3_2Components = [];
    TUTORIAL_3_2Components.push(text_Tut_3_2);
    TUTORIAL_3_2Components.push(key_resp_Tut_3_2);
    
    for (const thisComponent of TUTORIAL_3_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUTORIAL_3_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUTORIAL_3_2' ---
    // get current time
    t = TUTORIAL_3_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Tut_3_2* updates
    if (t >= 0.0 && text_Tut_3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Tut_3_2.tStart = t;  // (not accounting for frame time here)
      text_Tut_3_2.frameNStart = frameN;  // exact frame index
      
      text_Tut_3_2.setAutoDraw(true);
    }

    
    // *key_resp_Tut_3_2* updates
    if (t >= 0.0 && key_resp_Tut_3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Tut_3_2.tStart = t;  // (not accounting for frame time here)
      key_resp_Tut_3_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Tut_3_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut_3_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Tut_3_2.clearEvents(); });
    }

    if (key_resp_Tut_3_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Tut_3_2.getKeys({keyList: ['space', 'escape'], waitRelease: false});
      _key_resp_Tut_3_2_allKeys = _key_resp_Tut_3_2_allKeys.concat(theseKeys);
      if (_key_resp_Tut_3_2_allKeys.length > 0) {
        key_resp_Tut_3_2.keys = _key_resp_Tut_3_2_allKeys[_key_resp_Tut_3_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Tut_3_2.rt = _key_resp_Tut_3_2_allKeys[_key_resp_Tut_3_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUTORIAL_3_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUTORIAL_3_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUTORIAL_3_2' ---
    for (const thisComponent of TUTORIAL_3_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Tut_3_2.stop();
    // the Routine "TUTORIAL_3_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_Try_03_allKeys;
var TRY_03Components;
function TRY_03RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TRY_03' ---
    t = 0;
    TRY_03Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Try_03.keys = undefined;
    key_resp_Try_03.rt = undefined;
    _key_resp_Try_03_allKeys = [];
    // keep track of which components have finished
    TRY_03Components = [];
    TRY_03Components.push(background_Try_03);
    TRY_03Components.push(l_img_Try_03);
    TRY_03Components.push(r_img_Try_03);
    TRY_03Components.push(key_resp_Try_03);
    
    for (const thisComponent of TRY_03Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TRY_03RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TRY_03' ---
    // get current time
    t = TRY_03Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_Try_03* updates
    if (t >= 0.0 && background_Try_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_Try_03.tStart = t;  // (not accounting for frame time here)
      background_Try_03.frameNStart = frameN;  // exact frame index
      
      background_Try_03.setAutoDraw(true);
    }

    
    // *l_img_Try_03* updates
    if (t >= 0.0 && l_img_Try_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_03.tStart = t;  // (not accounting for frame time here)
      l_img_Try_03.frameNStart = frameN;  // exact frame index
      
      l_img_Try_03.setAutoDraw(true);
    }

    
    // *r_img_Try_03* updates
    if (t >= 0.0 && r_img_Try_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_03.tStart = t;  // (not accounting for frame time here)
      r_img_Try_03.frameNStart = frameN;  // exact frame index
      
      r_img_Try_03.setAutoDraw(true);
    }

    
    // *key_resp_Try_03* updates
    if (t >= 0.0 && key_resp_Try_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Try_03.tStart = t;  // (not accounting for frame time here)
      key_resp_Try_03.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Try_03.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_03.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_03.clearEvents(); });
    }

    if (key_resp_Try_03.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Try_03.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_Try_03_allKeys = _key_resp_Try_03_allKeys.concat(theseKeys);
      if (_key_resp_Try_03_allKeys.length > 0) {
        key_resp_Try_03.keys = _key_resp_Try_03_allKeys[_key_resp_Try_03_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Try_03.rt = _key_resp_Try_03_allKeys[_key_resp_Try_03_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TRY_03Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TRY_03RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TRY_03' ---
    for (const thisComponent of TRY_03Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Try_03.stop();
    // the Routine "TRY_03" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rand;
var TRY_03_selectionComponents;
function TRY_03_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TRY_03_selection' ---
    t = 0;
    TRY_03_selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_Try_03
    // determine probability
    rand = Math.random();
    
    // define visual parameters based on choice
    if ((key_resp_Try_03.keys === "x")) {
        m_img_Try_03_selection1.setImage("resources/tutalien1_a1.png");
        m_img_Try_03_selection2.setImage("resources/tutalien1_a2.png");
        l_img_Try_03_selection1.setImage("resources/blank.png");
        l_img_Try_03_selection2.setImage("resources/blank.png");
        r_img_Try_03_selection1.setImage("resources/tutalien2_d.png");
        r_img_Try_03_selection2.setImage("resources/tutalien2_d.png");
        if ((rand  < 0.3)) {
            img_Try_03_result.setImage("resources/tutalien1_n.png");
            gold_Try_03.setImage("resources/t.png");
        } else {
            img_Try_03_result.setImage("resources/tutalien1_n.png");
            gold_Try_03.setImage("resources/blank.png");
        }
    } else {
        if ((key_resp_Try_03.keys === "m")) {
            l_img_Try_03_selection1.setImage("resources/tutalien1_d.png");
            l_img_Try_03_selection2.setImage("resources/tutalien1_d.png");
            m_img_Try_03_selection1.setImage("resources/tutalien2_a1.png");
            m_img_Try_03_selection2.setImage("resources/tutalien2_a2.png");
            r_img_Try_03_selection1.setImage("resources/blank.png");
            r_img_Try_03_selection2.setImage("resources/blank.png");
            if ((rand  < 0.8)) {
                img_Try_03_result.setImage("resources/tutalien2_n.png");
                gold_Try_03.setImage("resources/t.png");
            } else {
                img_Try_03_result.setImage("resources/tutalien2_n.png");
                gold_Try_03.setImage("resources/blank.png");
            }
        } else {
            l_img_Try_03_selection1.setImage("resources/tutalien1_n.png");
            l_img_Try_03_selection2.setImage("resources/tutalien1_n.png");
            r_img_Try_03_selection1.setImage("resources/tutalien2_n.png");
            r_img_Try_03_selection2.setImage("resources/tutalien2_n.png");
            m_img_Try_03_selection1.setImage("resources/blank.png");
            m_img_Try_03_selection2.setImage("resources/blank.png");
            img_Try_03_result.setImage("resources/blank.png");
            gold_Try_03.setImage("resources/blank.png");
        }
    }
    
    // keep track of which components have finished
    TRY_03_selectionComponents = [];
    TRY_03_selectionComponents.push(background_Try_03_selection);
    TRY_03_selectionComponents.push(m_img_Try_03_selection1);
    TRY_03_selectionComponents.push(m_img_Try_03_selection2);
    TRY_03_selectionComponents.push(l_img_Try_03_selection1);
    TRY_03_selectionComponents.push(l_img_Try_03_selection2);
    TRY_03_selectionComponents.push(r_img_Try_03_selection1);
    TRY_03_selectionComponents.push(r_img_Try_03_selection2);
    TRY_03_selectionComponents.push(img_Try_03_result);
    TRY_03_selectionComponents.push(gold_Try_03);
    
    for (const thisComponent of TRY_03_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TRY_03_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TRY_03_selection' ---
    // get current time
    t = TRY_03_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_Try_03_selection* updates
    if (t >= 0.0 && background_Try_03_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_Try_03_selection.tStart = t;  // (not accounting for frame time here)
      background_Try_03_selection.frameNStart = frameN;  // exact frame index
      
      background_Try_03_selection.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_Try_03_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_Try_03_selection.setAutoDraw(false);
    }
    
    // *m_img_Try_03_selection1* updates
    if (t >= 0.0 && m_img_Try_03_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_Try_03_selection1.tStart = t;  // (not accounting for frame time here)
      m_img_Try_03_selection1.frameNStart = frameN;  // exact frame index
      
      m_img_Try_03_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_Try_03_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_Try_03_selection1.setAutoDraw(false);
    }
    
    // *m_img_Try_03_selection2* updates
    if (t >= 0.5 && m_img_Try_03_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_Try_03_selection2.tStart = t;  // (not accounting for frame time here)
      m_img_Try_03_selection2.frameNStart = frameN;  // exact frame index
      
      m_img_Try_03_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_Try_03_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_Try_03_selection2.setAutoDraw(false);
    }
    
    // *l_img_Try_03_selection1* updates
    if (t >= 0.0 && l_img_Try_03_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_03_selection1.tStart = t;  // (not accounting for frame time here)
      l_img_Try_03_selection1.frameNStart = frameN;  // exact frame index
      
      l_img_Try_03_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_Try_03_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_Try_03_selection1.setAutoDraw(false);
    }
    
    // *l_img_Try_03_selection2* updates
    if (t >= 0.5 && l_img_Try_03_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_03_selection2.tStart = t;  // (not accounting for frame time here)
      l_img_Try_03_selection2.frameNStart = frameN;  // exact frame index
      
      l_img_Try_03_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_Try_03_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_Try_03_selection2.setAutoDraw(false);
    }
    
    // *r_img_Try_03_selection1* updates
    if (t >= 0.0 && r_img_Try_03_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_03_selection1.tStart = t;  // (not accounting for frame time here)
      r_img_Try_03_selection1.frameNStart = frameN;  // exact frame index
      
      r_img_Try_03_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_Try_03_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_Try_03_selection1.setAutoDraw(false);
    }
    
    // *r_img_Try_03_selection2* updates
    if (t >= 0.5 && r_img_Try_03_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_03_selection2.tStart = t;  // (not accounting for frame time here)
      r_img_Try_03_selection2.frameNStart = frameN;  // exact frame index
      
      r_img_Try_03_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_Try_03_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_Try_03_selection2.setAutoDraw(false);
    }
    
    // *img_Try_03_result* updates
    if (t >= 0.91 && img_Try_03_result.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_Try_03_result.tStart = t;  // (not accounting for frame time here)
      img_Try_03_result.frameNStart = frameN;  // exact frame index
      
      img_Try_03_result.setAutoDraw(true);
    }

    frameRemains = 0.91 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img_Try_03_result.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img_Try_03_result.setAutoDraw(false);
    }
    
    // *gold_Try_03* updates
    if (t >= 1 && gold_Try_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_Try_03.tStart = t;  // (not accounting for frame time here)
      gold_Try_03.frameNStart = frameN;  // exact frame index
      
      gold_Try_03.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gold_Try_03.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gold_Try_03.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TRY_03_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TRY_03_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TRY_03_selection' ---
    for (const thisComponent of TRY_03_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_Try_04_allKeys;
var TUTORIAL_04Components;
function TUTORIAL_04RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUTORIAL_04' ---
    t = 0;
    TUTORIAL_04Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_Try_04.setText(instructions);
    middle_image_04.setSize(size_middle_image);
    middle_image_04.setImage(("resources/" + middle_image));
    l_img_Try_04.setImage(("resources/" + left_image));
    r_img_Try_04.setImage(("resources/" + right_image));
    key_resp_Try_04.keys = undefined;
    key_resp_Try_04.rt = undefined;
    _key_resp_Try_04_allKeys = [];
    // keep track of which components have finished
    TUTORIAL_04Components = [];
    TUTORIAL_04Components.push(text_Try_04);
    TUTORIAL_04Components.push(middle_image_04);
    TUTORIAL_04Components.push(l_img_Try_04);
    TUTORIAL_04Components.push(r_img_Try_04);
    TUTORIAL_04Components.push(key_resp_Try_04);
    
    for (const thisComponent of TUTORIAL_04Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUTORIAL_04RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUTORIAL_04' ---
    // get current time
    t = TUTORIAL_04Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Try_04* updates
    if (t >= 0.0 && text_Try_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Try_04.tStart = t;  // (not accounting for frame time here)
      text_Try_04.frameNStart = frameN;  // exact frame index
      
      text_Try_04.setAutoDraw(true);
    }

    
    // *middle_image_04* updates
    if (t >= 0.0 && middle_image_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      middle_image_04.tStart = t;  // (not accounting for frame time here)
      middle_image_04.frameNStart = frameN;  // exact frame index
      
      middle_image_04.setAutoDraw(true);
    }

    
    // *l_img_Try_04* updates
    if (t >= 0.0 && l_img_Try_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_Try_04.tStart = t;  // (not accounting for frame time here)
      l_img_Try_04.frameNStart = frameN;  // exact frame index
      
      l_img_Try_04.setAutoDraw(true);
    }

    
    // *r_img_Try_04* updates
    if (t >= 0.0 && r_img_Try_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_Try_04.tStart = t;  // (not accounting for frame time here)
      r_img_Try_04.frameNStart = frameN;  // exact frame index
      
      r_img_Try_04.setAutoDraw(true);
    }

    
    // *key_resp_Try_04* updates
    if (t >= 0.0 && key_resp_Try_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Try_04.tStart = t;  // (not accounting for frame time here)
      key_resp_Try_04.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Try_04.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_04.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Try_04.clearEvents(); });
    }

    if (key_resp_Try_04.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Try_04.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_Try_04_allKeys = _key_resp_Try_04_allKeys.concat(theseKeys);
      if (_key_resp_Try_04_allKeys.length > 0) {
        key_resp_Try_04.keys = _key_resp_Try_04_allKeys[_key_resp_Try_04_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Try_04.rt = _key_resp_Try_04_allKeys[_key_resp_Try_04_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUTORIAL_04Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUTORIAL_04RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUTORIAL_04' ---
    for (const thisComponent of TUTORIAL_04Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_Try_04.stop();
    // the Routine "TUTORIAL_04" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var n_prac;
var count_practice_goldComponents;
function count_practice_goldRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'count_practice_gold' ---
    t = 0;
    count_practice_goldClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_count_practice_gold
    // initialize count of gold gained in the practice
    n_prac = 0;
    
    // keep track of which components have finished
    count_practice_goldComponents = [];
    
    for (const thisComponent of count_practice_goldComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function count_practice_goldRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'count_practice_gold' ---
    // get current time
    t = count_practice_goldClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of count_practice_goldComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function count_practice_goldRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'count_practice_gold' ---
    for (const thisComponent of count_practice_goldComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "count_practice_gold" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_practice_allKeys;
var PRACTICE_rocketComponents;
function PRACTICE_rocketRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PRACTICE_rocket' ---
    t = 0;
    PRACTICE_rocketClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.950000);
    // update component parameters for each repeat
    background_practice.setImage('resources/earth.jpg');
    key_resp_practice.keys = undefined;
    key_resp_practice.rt = undefined;
    _key_resp_practice_allKeys = [];
    // keep track of which components have finished
    PRACTICE_rocketComponents = [];
    PRACTICE_rocketComponents.push(background_practice);
    PRACTICE_rocketComponents.push(l_rocket_practice);
    PRACTICE_rocketComponents.push(r_rocket_practice);
    PRACTICE_rocketComponents.push(key_resp_practice);
    
    for (const thisComponent of PRACTICE_rocketComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PRACTICE_rocketRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PRACTICE_rocket' ---
    // get current time
    t = PRACTICE_rocketClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_practice* updates
    if (t >= 0.0 && background_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_practice.tStart = t;  // (not accounting for frame time here)
      background_practice.frameNStart = frameN;  // exact frame index
      
      background_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_practice.setAutoDraw(false);
    }
    
    // *l_rocket_practice* updates
    if (t >= 0.0 && l_rocket_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_rocket_practice.tStart = t;  // (not accounting for frame time here)
      l_rocket_practice.frameNStart = frameN;  // exact frame index
      
      l_rocket_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_rocket_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_rocket_practice.setAutoDraw(false);
    }
    
    // *r_rocket_practice* updates
    if (t >= 0.0 && r_rocket_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_rocket_practice.tStart = t;  // (not accounting for frame time here)
      r_rocket_practice.frameNStart = frameN;  // exact frame index
      
      r_rocket_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_rocket_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_rocket_practice.setAutoDraw(false);
    }
    
    // *key_resp_practice* updates
    if (t >= 0.0 && key_resp_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice.clearEvents(); });
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_practice.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_practice_allKeys = _key_resp_practice_allKeys.concat(theseKeys);
      if (_key_resp_practice_allKeys.length > 0) {
        key_resp_practice.keys = _key_resp_practice_allKeys[_key_resp_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice.rt = _key_resp_practice_allKeys[_key_resp_practice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PRACTICE_rocketComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var trans;
var rare_transition;
var select_sp;
var show_alien;
var planet;
var l_a;
var r_a;
var left_probability;
var right_probability;
var probset;
function PRACTICE_rocketRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PRACTICE_rocket' ---
    for (const thisComponent of PRACTICE_rocketComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_practice_rocket
    // determine transition
    trans = get_practice(0.7);
    
    // check if transition is rare
    rare_transition = 0;
    if ((trans === 3)) {
        rare_transition = 1;
    }
    
    // precreate some variables
    select_sp = true;
    show_alien = true;
    
    // define visual parameters based on choice
    if ((key_resp_practice.keys === "x")) {
        m_img_practice_selection1.setImage("resources/tutrocket1_a1.png");
        m_img_practice_selection2.setImage("resources/tutrocket1_a2.png");
        l_img_practice_selection1.setImage("resources/blank.png");
        l_img_practice_selection2.setImage("resources/blank.png");
        r_img_practice_selection1.setImage("resources/tutrocket2_d.png");
        r_img_practice_selection2.setImage("resources/tutrocket2_d.png");
        imgcenter_practice.setImage("resources/tutrocket1_d.png");
    } else {
        if ((key_resp_practice.keys === "m")) {
            l_img_practice_selection1.setImage("resources/tutrocket1_d.png");
            l_img_practice_selection2.setImage("resources/tutrocket1_d.png");
            m_img_practice_selection1.setImage("resources/tutrocket2_a1.png");
            m_img_practice_selection2.setImage("resources/tutrocket2_a2.png");
            r_img_practice_selection1.setImage("resources/blank.png");
            r_img_practice_selection2.setImage("resources/blank.png");
            imgcenter_practice.setImage("resources/tutrocket2_d.png");
            trans = (5 - trans);
        } else {
            l_img_practice_selection1.setImage("resources/tutrocket1_s.png");
            l_img_practice_selection2.setImage("resources/tutrocket1_s.png");
            r_img_practice_selection1.setImage("resources/tutrocket2_s.png");
            r_img_practice_selection2.setImage("resources/tutrocket2_s.png");
            m_img_practice_selection1.setImage("resources/blank.png");
            m_img_practice_selection2.setImage("resources/blank.png");
            select_sp = false;
            show_alien = false;
        }
    }
    
    // determine planet based on transition
    if (select_sp) {
        if ((trans === 2)) {
            planet = "yellow";
            bg.setImage("resources/tutyellowplanet.jpg");
            background_practice_alien_selection.setImage("resources/tutyellowplanet.jpg");
            if ((flip_sides === true)) {
                l_a = "resources/tutalien4_n.png";
                r_a = "resources/tutalien3_n.png";
                left_probability = p4;
                right_probability = p3;
                left_alien_practice.setImage(l_a);
                right_alien_practice.setImage(r_a);
                probset = [p4, p3];
            } else {
                l_a = "resources/tutalien3_n.png";
                r_a = "resources/tutalien4_n.png";
                left_probability = p3;
                right_probability = p4;
                left_alien_practice.setImage(l_a);
                right_alien_practice.setImage(r_a);
                probset = [p3, p4];
            }
        } else {
            planet = "green";
            bg.setImage("resources/tutgreenplanet.jpg");
            background_practice_alien_selection.setImage("resources/tutgreenplanet.jpg");
            if ((flip_sides === true)) {
                l_a = "resources/tutalien2_n.png";
                r_a = "resources/tutalien1_n.png";
                left_probability = p2;
                right_probability = p1;
                left_alien_practice.setImage(l_a);
                right_alien_practice.setImage(r_a);
                probset = [p2, p1];
            } else {
                l_a = "resources/tutalien1_n.png";
                r_a = "resources/tutalien2_n.png";
                left_probability = p1;
                right_probability = p2;
                left_alien_practice.setImage(l_a);
                right_alien_practice.setImage(r_a);
                probset = [p1, p2];
            }
        }
    }
    
    key_resp_practice.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PRACTICE_rocket_selectionComponents;
function PRACTICE_rocket_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PRACTICE_rocket_selection' ---
    t = 0;
    PRACTICE_rocket_selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    PRACTICE_rocket_selectionComponents = [];
    PRACTICE_rocket_selectionComponents.push(background_practice_selection);
    PRACTICE_rocket_selectionComponents.push(l_img_practice_selection1);
    PRACTICE_rocket_selectionComponents.push(l_img_practice_selection2);
    PRACTICE_rocket_selectionComponents.push(r_img_practice_selection1);
    PRACTICE_rocket_selectionComponents.push(r_img_practice_selection2);
    PRACTICE_rocket_selectionComponents.push(m_img_practice_selection1);
    PRACTICE_rocket_selectionComponents.push(m_img_practice_selection2);
    
    for (const thisComponent of PRACTICE_rocket_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PRACTICE_rocket_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PRACTICE_rocket_selection' ---
    // get current time
    t = PRACTICE_rocket_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_practice_selection* updates
    if (t >= 0.0 && background_practice_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_practice_selection.tStart = t;  // (not accounting for frame time here)
      background_practice_selection.frameNStart = frameN;  // exact frame index
      
      background_practice_selection.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_practice_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_practice_selection.setAutoDraw(false);
    }
    
    // *l_img_practice_selection1* updates
    if (t >= 0.0 && l_img_practice_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_practice_selection1.tStart = t;  // (not accounting for frame time here)
      l_img_practice_selection1.frameNStart = frameN;  // exact frame index
      
      l_img_practice_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_practice_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_practice_selection1.setAutoDraw(false);
    }
    
    // *l_img_practice_selection2* updates
    if (t >= 0.5 && l_img_practice_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_practice_selection2.tStart = t;  // (not accounting for frame time here)
      l_img_practice_selection2.frameNStart = frameN;  // exact frame index
      
      l_img_practice_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_practice_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_practice_selection2.setAutoDraw(false);
    }
    
    // *r_img_practice_selection1* updates
    if (t >= 0.0 && r_img_practice_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_practice_selection1.tStart = t;  // (not accounting for frame time here)
      r_img_practice_selection1.frameNStart = frameN;  // exact frame index
      
      r_img_practice_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_practice_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_practice_selection1.setAutoDraw(false);
    }
    
    // *r_img_practice_selection2* updates
    if (t >= 0.5 && r_img_practice_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_practice_selection2.tStart = t;  // (not accounting for frame time here)
      r_img_practice_selection2.frameNStart = frameN;  // exact frame index
      
      r_img_practice_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_practice_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_practice_selection2.setAutoDraw(false);
    }
    
    // *m_img_practice_selection1* updates
    if (t >= 0.0 && m_img_practice_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_practice_selection1.tStart = t;  // (not accounting for frame time here)
      m_img_practice_selection1.frameNStart = frameN;  // exact frame index
      
      m_img_practice_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_practice_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_practice_selection1.setAutoDraw(false);
    }
    
    // *m_img_practice_selection2* updates
    if (t >= 0.5 && m_img_practice_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_practice_selection2.tStart = t;  // (not accounting for frame time here)
      m_img_practice_selection2.frameNStart = frameN;  // exact frame index
      
      m_img_practice_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_practice_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_practice_selection2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PRACTICE_rocket_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PRACTICE_rocket_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PRACTICE_rocket_selection' ---
    for (const thisComponent of PRACTICE_rocket_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_practice_alien_allKeys;
var PRACTICE_alienComponents;
function PRACTICE_alienRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PRACTICE_alien' ---
    t = 0;
    PRACTICE_alienClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.950000);
    // update component parameters for each repeat
    key_resp_practice_alien.keys = undefined;
    key_resp_practice_alien.rt = undefined;
    _key_resp_practice_alien_allKeys = [];
    // keep track of which components have finished
    PRACTICE_alienComponents = [];
    PRACTICE_alienComponents.push(bg);
    PRACTICE_alienComponents.push(imgcenter_practice);
    PRACTICE_alienComponents.push(left_alien_practice);
    PRACTICE_alienComponents.push(right_alien_practice);
    PRACTICE_alienComponents.push(key_resp_practice_alien);
    
    for (const thisComponent of PRACTICE_alienComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PRACTICE_alienRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PRACTICE_alien' ---
    // get current time
    t = PRACTICE_alienClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg* updates
    if (t >= 0.0 && bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg.tStart = t;  // (not accounting for frame time here)
      bg.frameNStart = frameN;  // exact frame index
      
      bg.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bg.setAutoDraw(false);
    }
    
    // *imgcenter_practice* updates
    if (t >= 0.0 && imgcenter_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imgcenter_practice.tStart = t;  // (not accounting for frame time here)
      imgcenter_practice.frameNStart = frameN;  // exact frame index
      
      imgcenter_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imgcenter_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imgcenter_practice.setAutoDraw(false);
    }
    
    // *left_alien_practice* updates
    if (t >= 0.0 && left_alien_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_alien_practice.tStart = t;  // (not accounting for frame time here)
      left_alien_practice.frameNStart = frameN;  // exact frame index
      
      left_alien_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_alien_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_alien_practice.setAutoDraw(false);
    }
    
    // *right_alien_practice* updates
    if (t >= 0.0 && right_alien_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_alien_practice.tStart = t;  // (not accounting for frame time here)
      right_alien_practice.frameNStart = frameN;  // exact frame index
      
      right_alien_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_alien_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_alien_practice.setAutoDraw(false);
    }
    
    // *key_resp_practice_alien* updates
    if (t >= 0.0 && key_resp_practice_alien.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_practice_alien.tStart = t;  // (not accounting for frame time here)
      key_resp_practice_alien.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_practice_alien.clock.reset();
      key_resp_practice_alien.start();
      key_resp_practice_alien.clearEvents();
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_practice_alien.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_practice_alien.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_practice_alien.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice_alien.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_practice_alien_allKeys = _key_resp_practice_alien_allKeys.concat(theseKeys);
      if (_key_resp_practice_alien_allKeys.length > 0) {
        key_resp_practice_alien.keys = _key_resp_practice_alien_allKeys[_key_resp_practice_alien_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice_alien.rt = _key_resp_practice_alien_allKeys[_key_resp_practice_alien_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PRACTICE_alienComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PRACTICE_alienRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PRACTICE_alien' ---
    for (const thisComponent of PRACTICE_alienComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_practice_alien.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var select_alien;
var probs;
var transmoney;
var PRACTICE_alien_selectionComponents;
function PRACTICE_alien_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PRACTICE_alien_selection' ---
    t = 0;
    PRACTICE_alien_selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_practice_alien_selection
    // precreate a variable
    select_alien = true;
    
    // determine visual parameters based on choice
    if ((planet === "green")) {
        if ((key_resp_practice_alien.keys === "x")) {
            if ((flip_sides === true)) {
                m_img_practice_alien_selection1.setImage("resources/tutalien2_a1.png");
                m_img_practice_alien_selection2.setImage("resources/tutalien2_a2.png");
                l_img_practice_alien_selection1.setImage("resources/blank.png");
                l_img_practice_alien_selection2.setImage("resources/blank.png");
                r_img_practice_alien_selection1.setImage("resources/tutalien1_d.png");
                r_img_practice_alien_selection2.setImage("resources/tutalien1_d.png");
                probs = p2;
                transmoney = get_practice(probs);
                if ((transmoney === 2)) {
                    img_practice_alien_result.setImage("resources/tutalien2_n.png");
                    gold_practice.setImage("resources/t.png");
                    n_prac += 1;
                } else {
                    img_practice_alien_result.setImage("resources/tutalien2_n.png");
                    gold_practice.setImage("resources/blank.png");
                }
            } else {
                m_img_practice_alien_selection1.setImage("resources/tutalien1_a1.png");
                m_img_practice_alien_selection2.setImage("resources/tutalien1_a2.png");
                l_img_practice_alien_selection1.setImage("resources/blank.png");
                l_img_practice_alien_selection2.setImage("resources/blank.png");
                r_img_practice_alien_selection1.setImage("resources/tutalien2_d.png");
                r_img_practice_alien_selection2.setImage("resources/tutalien2_d.png");
                probs = p1;
                transmoney = get_practice(probs);
                if ((transmoney === 2)) {
                    img_practice_alien_result.setImage("resources/tutalien1_n.png");
                    gold_practice.setImage("resources/t.png");
                    n_prac += 1;
                } else {
                    img_practice_alien_result.setImage("resources/tutalien1_n.png");
                    gold_practice.setImage("resources/blank.png");
                }
            }
        } else {
            if ((key_resp_practice_alien.keys === "m")) {
                if ((flip_sides === true)) {
                    m_img_practice_alien_selection1.setImage("resources/tutalien1_a1.png");
                    m_img_practice_alien_selection2.setImage("resources/tutalien1_a2.png");
                    l_img_practice_alien_selection1.setImage("resources/tutalien2_d.png");
                    l_img_practice_alien_selection2.setImage("resources/tutalien2_d.png");
                    r_img_practice_alien_selection1.setImage("resources/blank.png");
                    r_img_practice_alien_selection2.setImage("resources/blank.png");
                    probs = p1;
                    transmoney = get_practice(probs);
                    if ((transmoney === 2)) {
                        img_practice_alien_result.setImage("resources/tutalien1_n.png");
                        gold_practice.setImage("resources/t.png");
                        n_prac += 1;
                    } else {
                        img_practice_alien_result.setImage("resources/tutalien1_n.png");
                        gold_practice.setImage("resources/blank.png");
                    }
                } else {
                    m_img_practice_alien_selection1.setImage("resources/tutalien2_a1.png");
                    m_img_practice_alien_selection2.setImage("resources/tutalien2_a2.png");
                    l_img_practice_alien_selection1.setImage("resources/tutalien1_d.png");
                    l_img_practice_alien_selection2.setImage("resources/tutalien1_d.png");
                    r_img_practice_alien_selection1.setImage("resources/blank.png");
                    r_img_practice_alien_selection2.setImage("resources/blank.png");
                    probs = p2;
                    transmoney = get_practice(probs);
                    if ((transmoney === 2)) {
                        img_practice_alien_result.setImage("resources/tutalien2_n.png");
                        gold_practice.setImage("resources/t.png");
                        n_prac += 1;
                    } else {
                        img_practice_alien_result.setImage("resources/tutalien2_n.png");
                        gold_practice.setImage("resources/blank.png");
                    }
                }
            } else {
                if ((flip_sides === true)) {
                    l_img_practice_alien_selection1.setImage("resources/tutalien2_s.png");
                    l_img_practice_alien_selection2.setImage("resources/tutalien2_s.png");
                    r_img_practice_alien_selection1.setImage("resources/tutalien1_s.png");
                    r_img_practice_alien_selection2.setImage("resources/tutalien1_s.png");
                    m_img_practice_alien_selection1.setImage("resources/blank.png");
                    m_img_practice_alien_selection2.setImage("resources/blank.png");
                    gold_practice.setImage("resources/blank.png");
                    img_practice_alien_result.setImage("resources/blank.png");
                    select_alien = false;
                } else {
                    l_img_practice_alien_selection1.setImage("resources/tutalien3_s.png");
                    l_img_practice_alien_selection2.setImage("resources/tutalien3_s.png");
                    r_img_practice_alien_selection1.setImage("resources/tutalien4_s.png");
                    r_img_practice_alien_selection2.setImage("resources/tutalien4_s.png");
                    m_img_practice_alien_selection1.setImage("resources/blank.png");
                    m_img_practice_alien_selection2.setImage("resources/blank.png");
                    gold_practice.setImage("resources/blank.png");
                    img_practice_alien_result.setImage("resources/blank.png");
                    select_alien = false;
                }
            }
        }
    } else {
        if ((planet === "yellow")) {
            if ((key_resp_practice_alien.keys === "x")) {
                if ((flip_sides === true)) {
                    m_img_practice_alien_selection1.setImage("resources/tutalien4_a1.png");
                    m_img_practice_alien_selection2.setImage("resources/tutalien4_a2.png");
                    r_img_practice_alien_selection1.setImage("resources/tutalien3_d.png");
                    r_img_practice_alien_selection2.setImage("resources/tutalien3_d.png");
                    l_img_practice_alien_selection1.setImage("resources/blank.png");
                    l_img_practice_alien_selection2.setImage("resources/blank.png");
                    probs = p4;
                    transmoney = get_practice(probs);
                    if ((transmoney === 2)) {
                        img_practice_alien_result.setImage("resources/tutalien4_n.png");
                        gold_practice.setImage("resources/t.png");
                        n_prac += 1;
                    } else {
                        img_practice_alien_result.setImage("resources/tutalien4_n.png");
                        gold_practice.setImage("resources/blank.png");
                    }
                } else {
                    m_img_practice_alien_selection1.setImage("resources/tutalien3_a1.png");
                    m_img_practice_alien_selection2.setImage("resources/tutalien3_a2.png");
                    r_img_practice_alien_selection1.setImage("resources/tutalien4_d.png");
                    r_img_practice_alien_selection2.setImage("resources/tutalien4_d.png");
                    l_img_practice_alien_selection1.setImage("resources/blank.png");
                    l_img_practice_alien_selection2.setImage("resources/blank.png");
                    probs = p3;
                    transmoney = get_practice(probs);
                    if ((transmoney === 2)) {
                        img_practice_alien_result.setImage("resources/tutalien3_n.png");
                        gold_practice.setImage("resources/t.png");
                        n_prac += 1;
                    } else {
                        img_practice_alien_result.setImage("resources/tutalien3_n.png");
                        gold_practice.setImage("resources/blank.png");
                    }
                }
            } else {
                if ((key_resp_practice_alien.keys === "m")) {
                    if ((flip_sides === true)) {
                        l_img_practice_alien_selection1.setImage("resources/tutalien4_d.png");
                        l_img_practice_alien_selection2.setImage("resources/tutalien4_d.png");
                        m_img_practice_alien_selection1.setImage("resources/tutalien3_a1.png");
                        m_img_practice_alien_selection2.setImage("resources/tutalien3_a2.png");
                        r_img_practice_alien_selection1.setImage("resources/blank.png");
                        r_img_practice_alien_selection2.setImage("resources/blank.png");
                        probs = p3;
                        transmoney = get_practice(probs);
                        if ((transmoney === 2)) {
                            img_practice_alien_result.setImage("resources/tutalien3_n.png");
                            gold_practice.setImage("resources/t.png");
                            n_prac += 1;
                        } else {
                            img_practice_alien_result.setImage("resources/tutalien3_n.png");
                            gold_practice.setImage("resources/blank.png");
                        }
                    } else {
                        l_img_practice_alien_selection1.setImage("resources/tutalien3_d.png");
                        l_img_practice_alien_selection2.setImage("resources/tutalien3_d.png");
                        m_img_practice_alien_selection1.setImage("resources/tutalien4_a1.png");
                        m_img_practice_alien_selection2.setImage("resources/tutalien4_a2.png");
                        r_img_practice_alien_selection1.setImage("resources/blank.png");
                        r_img_practice_alien_selection2.setImage("resources/blank.png");
                        probs = p4;
                        transmoney = get_practice(probs);
                        if ((transmoney === 2)) {
                            img_practice_alien_result.setImage("resources/tutalien4_n.png");
                            gold_practice.setImage("resources/t.png");
                            n_prac += 1;
                        } else {
                            img_practice_alien_result.setImage("resources/tutalien4_n.png");
                            gold_practice.setImage("resources/blank.png");
                        }
                    }
                } else {
                    if ((flip_sides === true)) {
                        l_img_practice_alien_selection1.setImage("resources/tutalien4_s.png");
                        l_img_practice_alien_selection2.setImage("resources/tutalien4_s.png");
                        r_img_practice_alien_selection1.setImage("resources/tutalien3_s.png");
                        r_img_practice_alien_selection2.setImage("resources/tutalien3_s.png");
                        m_img_practice_alien_selection1.setImage("resources/blank.png");
                        m_img_practice_alien_selection2.setImage("resources/blank.png");
                        gold_practice.setImage("resources/blank.png");
                        img_practice_alien_result.setImage("resources/blank.png");
                        select_alien = false;
                    } else {
                        l_img_practice_alien_selection1.setImage("resources/tutalien3_s.png");
                        l_img_practice_alien_selection2.setImage("resources/tutalien3_s.png");
                        r_img_practice_alien_selection1.setImage("resources/tutalien4_s.png");
                        r_img_practice_alien_selection2.setImage("resources/tutalien4_s.png");
                        m_img_practice_alien_selection1.setImage("resources/blank.png");
                        m_img_practice_alien_selection2.setImage("resources/blank.png");
                        gold_practice.setImage("resources/blank.png");
                        img_practice_alien_result.setImage("resources/blank.png");
                        select_alien = false;
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    PRACTICE_alien_selectionComponents = [];
    PRACTICE_alien_selectionComponents.push(background_practice_alien_selection);
    PRACTICE_alien_selectionComponents.push(m_img_practice_alien_selection1);
    PRACTICE_alien_selectionComponents.push(m_img_practice_alien_selection2);
    PRACTICE_alien_selectionComponents.push(l_img_practice_alien_selection1);
    PRACTICE_alien_selectionComponents.push(l_img_practice_alien_selection2);
    PRACTICE_alien_selectionComponents.push(r_img_practice_alien_selection1);
    PRACTICE_alien_selectionComponents.push(r_img_practice_alien_selection2);
    PRACTICE_alien_selectionComponents.push(img_practice_alien_result);
    PRACTICE_alien_selectionComponents.push(gold_practice);
    
    for (const thisComponent of PRACTICE_alien_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PRACTICE_alien_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PRACTICE_alien_selection' ---
    // get current time
    t = PRACTICE_alien_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_practice_alien_selection* updates
    if (t >= 0.0 && background_practice_alien_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_practice_alien_selection.tStart = t;  // (not accounting for frame time here)
      background_practice_alien_selection.frameNStart = frameN;  // exact frame index
      
      background_practice_alien_selection.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_practice_alien_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_practice_alien_selection.setAutoDraw(false);
    }
    
    // *m_img_practice_alien_selection1* updates
    if (t >= 0.0 && m_img_practice_alien_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_practice_alien_selection1.tStart = t;  // (not accounting for frame time here)
      m_img_practice_alien_selection1.frameNStart = frameN;  // exact frame index
      
      m_img_practice_alien_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_practice_alien_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_practice_alien_selection1.setAutoDraw(false);
    }
    
    // *m_img_practice_alien_selection2* updates
    if (t >= 0.5 && m_img_practice_alien_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_practice_alien_selection2.tStart = t;  // (not accounting for frame time here)
      m_img_practice_alien_selection2.frameNStart = frameN;  // exact frame index
      
      m_img_practice_alien_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_practice_alien_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_practice_alien_selection2.setAutoDraw(false);
    }
    
    // *l_img_practice_alien_selection1* updates
    if (t >= 0.0 && l_img_practice_alien_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_practice_alien_selection1.tStart = t;  // (not accounting for frame time here)
      l_img_practice_alien_selection1.frameNStart = frameN;  // exact frame index
      
      l_img_practice_alien_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_practice_alien_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_practice_alien_selection1.setAutoDraw(false);
    }
    
    // *l_img_practice_alien_selection2* updates
    if (t >= 0.5 && l_img_practice_alien_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_practice_alien_selection2.tStart = t;  // (not accounting for frame time here)
      l_img_practice_alien_selection2.frameNStart = frameN;  // exact frame index
      
      l_img_practice_alien_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_practice_alien_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_practice_alien_selection2.setAutoDraw(false);
    }
    
    // *r_img_practice_alien_selection1* updates
    if (t >= 0.0 && r_img_practice_alien_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_practice_alien_selection1.tStart = t;  // (not accounting for frame time here)
      r_img_practice_alien_selection1.frameNStart = frameN;  // exact frame index
      
      r_img_practice_alien_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_practice_alien_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_practice_alien_selection1.setAutoDraw(false);
    }
    
    // *r_img_practice_alien_selection2* updates
    if (t >= 0.5 && r_img_practice_alien_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_practice_alien_selection2.tStart = t;  // (not accounting for frame time here)
      r_img_practice_alien_selection2.frameNStart = frameN;  // exact frame index
      
      r_img_practice_alien_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_practice_alien_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_practice_alien_selection2.setAutoDraw(false);
    }
    
    // *img_practice_alien_result* updates
    if (t >= 0.91 && img_practice_alien_result.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_practice_alien_result.tStart = t;  // (not accounting for frame time here)
      img_practice_alien_result.frameNStart = frameN;  // exact frame index
      
      img_practice_alien_result.setAutoDraw(true);
    }

    frameRemains = 0.91 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img_practice_alien_result.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img_practice_alien_result.setAutoDraw(false);
    }
    
    // *gold_practice* updates
    if (t >= 1 && gold_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_practice.tStart = t;  // (not accounting for frame time here)
      gold_practice.frameNStart = frameN;  // exact frame index
      
      gold_practice.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gold_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gold_practice.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PRACTICE_alien_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PRACTICE_alien_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PRACTICE_alien_selection' ---
    for (const thisComponent of PRACTICE_alien_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_TUT_22_allKeys;
var TUT_22Components;
function TUT_22RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUT_22' ---
    t = 0;
    TUT_22Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_TUT_22.keys = undefined;
    key_resp_TUT_22.rt = undefined;
    _key_resp_TUT_22_allKeys = [];
    // keep track of which components have finished
    TUT_22Components = [];
    TUT_22Components.push(text_TUT_22);
    TUT_22Components.push(key_resp_TUT_22);
    
    for (const thisComponent of TUT_22Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUT_22RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUT_22' ---
    // get current time
    t = TUT_22Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_TUT_22* updates
    if (t >= 0.0 && text_TUT_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_TUT_22.tStart = t;  // (not accounting for frame time here)
      text_TUT_22.frameNStart = frameN;  // exact frame index
      
      text_TUT_22.setAutoDraw(true);
    }

    
    // *key_resp_TUT_22* updates
    if (t >= 0.0 && key_resp_TUT_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_TUT_22.tStart = t;  // (not accounting for frame time here)
      key_resp_TUT_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_TUT_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_22.clearEvents(); });
    }

    if (key_resp_TUT_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_TUT_22.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_TUT_22_allKeys = _key_resp_TUT_22_allKeys.concat(theseKeys);
      if (_key_resp_TUT_22_allKeys.length > 0) {
        key_resp_TUT_22.keys = _key_resp_TUT_22_allKeys[_key_resp_TUT_22_allKeys.length - 1].name;  // just the last key pressed
        key_resp_TUT_22.rt = _key_resp_TUT_22_allKeys[_key_resp_TUT_22_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUT_22Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUT_22RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUT_22' ---
    for (const thisComponent of TUT_22Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_TUT_22.stop();
    // the Routine "TUT_22" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_show_practice_gold_allKeys;
var TUT_23Components;
function TUT_23RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUT_23' ---
    t = 0;
    TUT_23Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_show_practice_gold.setText((("You got " + n_prac.toString()) + " pieces of treasure.\n\nPress SPACE to continue."));
    key_resp_show_practice_gold.keys = undefined;
    key_resp_show_practice_gold.rt = undefined;
    _key_resp_show_practice_gold_allKeys = [];
    // keep track of which components have finished
    TUT_23Components = [];
    TUT_23Components.push(text_show_practice_gold);
    TUT_23Components.push(key_resp_show_practice_gold);
    
    for (const thisComponent of TUT_23Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUT_23RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUT_23' ---
    // get current time
    t = TUT_23Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_show_practice_gold* updates
    if (t >= 0.0 && text_show_practice_gold.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_show_practice_gold.tStart = t;  // (not accounting for frame time here)
      text_show_practice_gold.frameNStart = frameN;  // exact frame index
      
      text_show_practice_gold.setAutoDraw(true);
    }

    
    // *key_resp_show_practice_gold* updates
    if (t >= 0.0 && key_resp_show_practice_gold.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_show_practice_gold.tStart = t;  // (not accounting for frame time here)
      key_resp_show_practice_gold.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_show_practice_gold.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_show_practice_gold.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_show_practice_gold.clearEvents(); });
    }

    if (key_resp_show_practice_gold.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_show_practice_gold.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_show_practice_gold_allKeys = _key_resp_show_practice_gold_allKeys.concat(theseKeys);
      if (_key_resp_show_practice_gold_allKeys.length > 0) {
        key_resp_show_practice_gold.keys = _key_resp_show_practice_gold_allKeys[_key_resp_show_practice_gold_allKeys.length - 1].name;  // just the last key pressed
        key_resp_show_practice_gold.rt = _key_resp_show_practice_gold_allKeys[_key_resp_show_practice_gold_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUT_23Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUT_23RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUT_23' ---
    for (const thisComponent of TUT_23Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_show_practice_gold.stop();
    // the Routine "TUT_23" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_TUT_24_allKeys;
var TUT_24Components;
function TUT_24RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUT_24' ---
    t = 0;
    TUT_24Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_TUT_24.keys = undefined;
    key_resp_TUT_24.rt = undefined;
    _key_resp_TUT_24_allKeys = [];
    // keep track of which components have finished
    TUT_24Components = [];
    TUT_24Components.push(text_TUT_24);
    TUT_24Components.push(key_resp_TUT_24);
    
    for (const thisComponent of TUT_24Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUT_24RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUT_24' ---
    // get current time
    t = TUT_24Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_TUT_24* updates
    if (t >= 0.0 && text_TUT_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_TUT_24.tStart = t;  // (not accounting for frame time here)
      text_TUT_24.frameNStart = frameN;  // exact frame index
      
      text_TUT_24.setAutoDraw(true);
    }

    
    // *key_resp_TUT_24* updates
    if (t >= 0.0 && key_resp_TUT_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_TUT_24.tStart = t;  // (not accounting for frame time here)
      key_resp_TUT_24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_TUT_24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_24.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_24.clearEvents(); });
    }

    if (key_resp_TUT_24.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_TUT_24.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_TUT_24_allKeys = _key_resp_TUT_24_allKeys.concat(theseKeys);
      if (_key_resp_TUT_24_allKeys.length > 0) {
        key_resp_TUT_24.keys = _key_resp_TUT_24_allKeys[_key_resp_TUT_24_allKeys.length - 1].name;  // just the last key pressed
        key_resp_TUT_24.rt = _key_resp_TUT_24_allKeys[_key_resp_TUT_24_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUT_24Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUT_24RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUT_24' ---
    for (const thisComponent of TUT_24Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_TUT_24.stop();
    // the Routine "TUT_24" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_TUT_25_allKeys;
var TUT_25Components;
function TUT_25RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUT_25' ---
    t = 0;
    TUT_25Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_TUT_25.keys = undefined;
    key_resp_TUT_25.rt = undefined;
    _key_resp_TUT_25_allKeys = [];
    // keep track of which components have finished
    TUT_25Components = [];
    TUT_25Components.push(text_TUT_25);
    TUT_25Components.push(key_resp_TUT_25);
    
    for (const thisComponent of TUT_25Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUT_25RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUT_25' ---
    // get current time
    t = TUT_25Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_TUT_25* updates
    if (t >= 0.0 && text_TUT_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_TUT_25.tStart = t;  // (not accounting for frame time here)
      text_TUT_25.frameNStart = frameN;  // exact frame index
      
      text_TUT_25.setAutoDraw(true);
    }

    
    // *key_resp_TUT_25* updates
    if (t >= 0.0 && key_resp_TUT_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_TUT_25.tStart = t;  // (not accounting for frame time here)
      key_resp_TUT_25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_TUT_25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_25.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_25.clearEvents(); });
    }

    if (key_resp_TUT_25.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_TUT_25.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_TUT_25_allKeys = _key_resp_TUT_25_allKeys.concat(theseKeys);
      if (_key_resp_TUT_25_allKeys.length > 0) {
        key_resp_TUT_25.keys = _key_resp_TUT_25_allKeys[_key_resp_TUT_25_allKeys.length - 1].name;  // just the last key pressed
        key_resp_TUT_25.rt = _key_resp_TUT_25_allKeys[_key_resp_TUT_25_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUT_25Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUT_25RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUT_25' ---
    for (const thisComponent of TUT_25Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_TUT_25.stop();
    // the Routine "TUT_25" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_TUT_26_allKeys;
var TUT_26Components;
function TUT_26RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUT_26' ---
    t = 0;
    TUT_26Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_TUT_26.keys = undefined;
    key_resp_TUT_26.rt = undefined;
    _key_resp_TUT_26_allKeys = [];
    // keep track of which components have finished
    TUT_26Components = [];
    TUT_26Components.push(text_TUT_26);
    TUT_26Components.push(key_resp_TUT_26);
    
    for (const thisComponent of TUT_26Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUT_26RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUT_26' ---
    // get current time
    t = TUT_26Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_TUT_26* updates
    if (t >= 0.0 && text_TUT_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_TUT_26.tStart = t;  // (not accounting for frame time here)
      text_TUT_26.frameNStart = frameN;  // exact frame index
      
      text_TUT_26.setAutoDraw(true);
    }

    
    // *key_resp_TUT_26* updates
    if (t >= 0.0 && key_resp_TUT_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_TUT_26.tStart = t;  // (not accounting for frame time here)
      key_resp_TUT_26.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_TUT_26.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_26.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_26.clearEvents(); });
    }

    if (key_resp_TUT_26.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_TUT_26.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_TUT_26_allKeys = _key_resp_TUT_26_allKeys.concat(theseKeys);
      if (_key_resp_TUT_26_allKeys.length > 0) {
        key_resp_TUT_26.keys = _key_resp_TUT_26_allKeys[_key_resp_TUT_26_allKeys.length - 1].name;  // just the last key pressed
        key_resp_TUT_26.rt = _key_resp_TUT_26_allKeys[_key_resp_TUT_26_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUT_26Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUT_26RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUT_26' ---
    for (const thisComponent of TUT_26Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_TUT_26.stop();
    // the Routine "TUT_26" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_TUT_27_allKeys;
var TUT_27Components;
function TUT_27RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUT_27' ---
    t = 0;
    TUT_27Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_TUT_27.keys = undefined;
    key_resp_TUT_27.rt = undefined;
    _key_resp_TUT_27_allKeys = [];
    // keep track of which components have finished
    TUT_27Components = [];
    TUT_27Components.push(text_TUT_27);
    TUT_27Components.push(key_resp_TUT_27);
    
    for (const thisComponent of TUT_27Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUT_27RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUT_27' ---
    // get current time
    t = TUT_27Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_TUT_27* updates
    if (t >= 0.0 && text_TUT_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_TUT_27.tStart = t;  // (not accounting for frame time here)
      text_TUT_27.frameNStart = frameN;  // exact frame index
      
      text_TUT_27.setAutoDraw(true);
    }

    
    // *key_resp_TUT_27* updates
    if (t >= 0.0 && key_resp_TUT_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_TUT_27.tStart = t;  // (not accounting for frame time here)
      key_resp_TUT_27.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_TUT_27.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_27.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TUT_27.clearEvents(); });
    }

    if (key_resp_TUT_27.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_TUT_27.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_TUT_27_allKeys = _key_resp_TUT_27_allKeys.concat(theseKeys);
      if (_key_resp_TUT_27_allKeys.length > 0) {
        key_resp_TUT_27.keys = _key_resp_TUT_27_allKeys[_key_resp_TUT_27_allKeys.length - 1].name;  // just the last key pressed
        key_resp_TUT_27.rt = _key_resp_TUT_27_allKeys[_key_resp_TUT_27_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUT_27Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUT_27RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUT_27' ---
    for (const thisComponent of TUT_27Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_TUT_27.stop();
    // the Routine "TUT_27" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_28_allKeys;
var totalgold;
var TUT_28Components;
function TUT_28RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TUT_28' ---
    t = 0;
    TUT_28Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_28.keys = undefined;
    key_resp_28.rt = undefined;
    _key_resp_28_allKeys = [];
    // Run 'Begin Routine' code from treasure_count
    totalgold = 0;
    
    // keep track of which components have finished
    TUT_28Components = [];
    TUT_28Components.push(text_TUT_28);
    TUT_28Components.push(key_resp_28);
    
    for (const thisComponent of TUT_28Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TUT_28RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TUT_28' ---
    // get current time
    t = TUT_28Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_TUT_28* updates
    if (t >= 0.0 && text_TUT_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_TUT_28.tStart = t;  // (not accounting for frame time here)
      text_TUT_28.frameNStart = frameN;  // exact frame index
      
      text_TUT_28.setAutoDraw(true);
    }

    
    // *key_resp_28* updates
    if (t >= 0.0 && key_resp_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_28.tStart = t;  // (not accounting for frame time here)
      key_resp_28.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_28.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.clearEvents(); });
    }

    if (key_resp_28.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_28.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_28_allKeys = _key_resp_28_allKeys.concat(theseKeys);
      if (_key_resp_28_allKeys.length > 0) {
        key_resp_28.keys = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].name;  // just the last key pressed
        key_resp_28.rt = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TUT_28Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TUT_28RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TUT_28' ---
    for (const thisComponent of TUT_28Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_28.stop();
    // the Routine "TUT_28" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_exp_allKeys;
var EXP_rocketComponents;
function EXP_rocketRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EXP_rocket' ---
    t = 0;
    EXP_rocketClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.950000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_exp_rocket
    // save payoff info in each row for simplified analysis
    psychoJS.experiment.addData("payoff_list", payoff);
    
    // save phase info for convenience
    psychoJS.experiment.addData("phase", 'learning');
    
    background_exp.setImage('resources/earth.jpg');
    key_resp_exp.keys = undefined;
    key_resp_exp.rt = undefined;
    _key_resp_exp_allKeys = [];
    // keep track of which components have finished
    EXP_rocketComponents = [];
    EXP_rocketComponents.push(background_exp);
    EXP_rocketComponents.push(l_rocket_exp);
    EXP_rocketComponents.push(r_rocket_exp);
    EXP_rocketComponents.push(key_resp_exp);
    
    for (const thisComponent of EXP_rocketComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EXP_rocketRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EXP_rocket' ---
    // get current time
    t = EXP_rocketClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_exp* updates
    if (t >= 0.0 && background_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_exp.tStart = t;  // (not accounting for frame time here)
      background_exp.frameNStart = frameN;  // exact frame index
      
      background_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_exp.setAutoDraw(false);
    }
    
    // *l_rocket_exp* updates
    if (t >= 0.0 && l_rocket_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_rocket_exp.tStart = t;  // (not accounting for frame time here)
      l_rocket_exp.frameNStart = frameN;  // exact frame index
      
      l_rocket_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_rocket_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_rocket_exp.setAutoDraw(false);
    }
    
    // *r_rocket_exp* updates
    if (t >= 0.0 && r_rocket_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_rocket_exp.tStart = t;  // (not accounting for frame time here)
      r_rocket_exp.frameNStart = frameN;  // exact frame index
      
      r_rocket_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_rocket_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_rocket_exp.setAutoDraw(false);
    }
    
    // *key_resp_exp* updates
    if (t >= 0.0 && key_resp_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_exp.tStart = t;  // (not accounting for frame time here)
      key_resp_exp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_exp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_exp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_exp.clearEvents(); });
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_exp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_exp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_exp.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_exp_allKeys = _key_resp_exp_allKeys.concat(theseKeys);
      if (_key_resp_exp_allKeys.length > 0) {
        key_resp_exp.keys = _key_resp_exp_allKeys[0].name;  // just the first key pressed
        key_resp_exp.rt = _key_resp_exp_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EXP_rocketComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EXP_rocketRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EXP_rocket' ---
    for (const thisComponent of EXP_rocketComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_exp_rocket
    // pull probabilities for rocket transition
    let [trans, rand_sp] = get(0.7);
    
    // save if rare transition
    rare_transition = 0;
    if ((trans === 3)) {
        rare_transition = 1;
    }
    psychoJS.experiment.addData("rare_transition", rare_transition);
    
    // precreate variables
    select_sp = true;
    show_alien = true;
    
    // set display according to the choice
    if ((key_resp_exp.keys === "x")) {
        l_img_exp_selection1.setImage("resources/blank.png");
        l_img_exp_selection2.setImage("resources/blank.png");
        m_img_exp_selection1.setImage("resources/rocket1_a1.png");
        m_img_exp_selection2.setImage("resources/rocket1_a2.png");
        r_img_exp_selection1.setImage("resources/rocket2_deact.png");
        r_img_exp_selection2.setImage("resources/rocket2_deact.png");
        imgcenter_exp.setImage("resources/rocket1_deact.png");
    } else {
        if ((key_resp_exp.keys === "m")) {
            l_img_exp_selection1.setImage("resources/rocket1_deact.png");
            l_img_exp_selection2.setImage("resources/rocket1_deact.png");
            m_img_exp_selection1.setImage("resources/rocket2_a1.png");
            m_img_exp_selection2.setImage("resources/rocket2_a2.png");
            r_img_exp_selection1.setImage("resources/blank.png");
            r_img_exp_selection2.setImage("resources/blank.png");
            imgcenter_exp.setImage("resources/rocket2_deact.png");
            trans = (5 - trans);
        } else {
            l_img_exp_selection1.setImage("resources/rocket1_sp.png");
            l_img_exp_selection2.setImage("resources/rocket1_sp.png");
            r_img_exp_selection1.setImage("resources/rocket2_sp.png");
            r_img_exp_selection2.setImage("resources/rocket2_sp.png");
            m_img_exp_selection1.setImage("resources/blank.png");
            m_img_exp_selection2.setImage("resources/blank.png");
            select_sp = false;
            show_alien = false;
        }
    }
    
    // choose planet according to rocket transition probability
    if (select_sp) {
        if ((trans === 2)) {
            planet = "purple";
            bg_exp.setImage("resources/purpleplanet.jpg");
            background_exp_alien_selection.setImage("resources/purpleplanet.jpg");
            if ((flip_sides === true)) {
                l_a = "resources/alien4_norm.png";
                r_a = "resources/alien3_norm.png";
                left_probability = p4;
                right_probability = p3;
                left_alien_exp.setImage(l_a);
                psychoJS.experiment.addData("left_alien", l_a);
                psychoJS.experiment.addData("left_probabilty", left_probability);
                right_alien_exp.setImage(r_a);
                psychoJS.experiment.addData("right_alien", r_a);
                psychoJS.experiment.addData("right_probabilty", right_probability);
                probset = [p3, p4];
            } else {
                l_a = "resources/alien3_norm.png";
                r_a = "resources/alien4_norm.png";
                left_probability = p3;
                right_probability = p4;
                left_alien_exp.setImage(l_a);
                psychoJS.experiment.addData("left_alien", l_a);
                psychoJS.experiment.addData("left_probabilty", left_probability);
                right_alien_exp.setImage(r_a);
                psychoJS.experiment.addData("right_alien", r_a);
                psychoJS.experiment.addData("right_probabilty", right_probability);
                probset = [p3, p4];
            }
        } else {
            planet = "red";
            bg_exp.setImage("resources/redplanet.jpg");
            background_exp_alien_selection.setImage("resources/redplanet.jpg");
            if ((flip_sides === true)) {
                l_a = "resources/alien2_norm.png";
                r_a = "resources/alien1_norm.png";
                left_probability = p2;
                right_probability = p1;
                left_alien_exp.setImage(l_a);
                psychoJS.experiment.addData("left_alien", l_a);
                psychoJS.experiment.addData("left_probabilty", left_probability);
                right_alien_exp.setImage(r_a);
                psychoJS.experiment.addData("right_alien", r_a);
                psychoJS.experiment.addData("right_probabilty", right_probability);
                probset = [p1, p2];
            } else {
                l_a = "resources/alien1_norm.png";
                r_a = "resources/alien2_norm.png";
                left_probability = p1;
                right_probability = p2;
                left_alien_exp.setImage(l_a);
                psychoJS.experiment.addData("left_alien", l_a);
                psychoJS.experiment.addData("left_probabilty", left_probability);
                right_alien_exp.setImage(r_a);
                psychoJS.experiment.addData("right_alien", r_a);
                psychoJS.experiment.addData("right_probabilty", right_probability);
                probset = [p1, p2];
            }
        }
    }
    
    // save helper variables
    psychoJS.experiment.addData("select_sp", select_sp);
    psychoJS.experiment.addData("show_alien", show_alien);
    psychoJS.experiment.addData("rocket_trans", trans);
    psychoJS.experiment.addData("rand_sp", rand_sp);
    psychoJS.experiment.addData("planet", planet);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_exp.corr, level);
    }
    psychoJS.experiment.addData('key_resp_exp.keys', key_resp_exp.keys);
    if (typeof key_resp_exp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_exp.rt', key_resp_exp.rt);
        routineTimer.reset();
        }
    
    key_resp_exp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EXP_rocket_selectionComponents;
function EXP_rocket_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EXP_rocket_selection' ---
    t = 0;
    EXP_rocket_selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EXP_rocket_selectionComponents = [];
    EXP_rocket_selectionComponents.push(background_exp_selection);
    EXP_rocket_selectionComponents.push(l_img_exp_selection1);
    EXP_rocket_selectionComponents.push(l_img_exp_selection2);
    EXP_rocket_selectionComponents.push(r_img_exp_selection1);
    EXP_rocket_selectionComponents.push(r_img_exp_selection2);
    EXP_rocket_selectionComponents.push(m_img_exp_selection1);
    EXP_rocket_selectionComponents.push(m_img_exp_selection2);
    
    for (const thisComponent of EXP_rocket_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EXP_rocket_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EXP_rocket_selection' ---
    // get current time
    t = EXP_rocket_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_exp_selection* updates
    if (t >= 0.0 && background_exp_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_exp_selection.tStart = t;  // (not accounting for frame time here)
      background_exp_selection.frameNStart = frameN;  // exact frame index
      
      background_exp_selection.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_exp_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_exp_selection.setAutoDraw(false);
    }
    
    // *l_img_exp_selection1* updates
    if (t >= 0.0 && l_img_exp_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_exp_selection1.tStart = t;  // (not accounting for frame time here)
      l_img_exp_selection1.frameNStart = frameN;  // exact frame index
      
      l_img_exp_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_exp_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_exp_selection1.setAutoDraw(false);
    }
    
    // *l_img_exp_selection2* updates
    if (t >= 0.5 && l_img_exp_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_exp_selection2.tStart = t;  // (not accounting for frame time here)
      l_img_exp_selection2.frameNStart = frameN;  // exact frame index
      
      l_img_exp_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_exp_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_exp_selection2.setAutoDraw(false);
    }
    
    // *r_img_exp_selection1* updates
    if (t >= 0.0 && r_img_exp_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_exp_selection1.tStart = t;  // (not accounting for frame time here)
      r_img_exp_selection1.frameNStart = frameN;  // exact frame index
      
      r_img_exp_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_exp_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_exp_selection1.setAutoDraw(false);
    }
    
    // *r_img_exp_selection2* updates
    if (t >= 0.5 && r_img_exp_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_exp_selection2.tStart = t;  // (not accounting for frame time here)
      r_img_exp_selection2.frameNStart = frameN;  // exact frame index
      
      r_img_exp_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_exp_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_exp_selection2.setAutoDraw(false);
    }
    
    // *m_img_exp_selection1* updates
    if (t >= 0.0 && m_img_exp_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_exp_selection1.tStart = t;  // (not accounting for frame time here)
      m_img_exp_selection1.frameNStart = frameN;  // exact frame index
      
      m_img_exp_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_exp_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_exp_selection1.setAutoDraw(false);
    }
    
    // *m_img_exp_selection2* updates
    if (t >= 0.5 && m_img_exp_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_exp_selection2.tStart = t;  // (not accounting for frame time here)
      m_img_exp_selection2.frameNStart = frameN;  // exact frame index
      
      m_img_exp_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_exp_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_exp_selection2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EXP_rocket_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EXP_rocket_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EXP_rocket_selection' ---
    for (const thisComponent of EXP_rocket_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_exp_alien_allKeys;
var EXP_alienComponents;
function EXP_alienRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EXP_alien' ---
    t = 0;
    EXP_alienClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.950000);
    // update component parameters for each repeat
    key_resp_exp_alien.keys = undefined;
    key_resp_exp_alien.rt = undefined;
    _key_resp_exp_alien_allKeys = [];
    // keep track of which components have finished
    EXP_alienComponents = [];
    EXP_alienComponents.push(bg_exp);
    EXP_alienComponents.push(imgcenter_exp);
    EXP_alienComponents.push(left_alien_exp);
    EXP_alienComponents.push(right_alien_exp);
    EXP_alienComponents.push(key_resp_exp_alien);
    
    for (const thisComponent of EXP_alienComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EXP_alienRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EXP_alien' ---
    // get current time
    t = EXP_alienClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_exp* updates
    if (t >= 0.0 && bg_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_exp.tStart = t;  // (not accounting for frame time here)
      bg_exp.frameNStart = frameN;  // exact frame index
      
      bg_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bg_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bg_exp.setAutoDraw(false);
    }
    
    // *imgcenter_exp* updates
    if (t >= 0.0 && imgcenter_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imgcenter_exp.tStart = t;  // (not accounting for frame time here)
      imgcenter_exp.frameNStart = frameN;  // exact frame index
      
      imgcenter_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imgcenter_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imgcenter_exp.setAutoDraw(false);
    }
    
    // *left_alien_exp* updates
    if (t >= 0.0 && left_alien_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_alien_exp.tStart = t;  // (not accounting for frame time here)
      left_alien_exp.frameNStart = frameN;  // exact frame index
      
      left_alien_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_alien_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_alien_exp.setAutoDraw(false);
    }
    
    // *right_alien_exp* updates
    if (t >= 0.0 && right_alien_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_alien_exp.tStart = t;  // (not accounting for frame time here)
      right_alien_exp.frameNStart = frameN;  // exact frame index
      
      right_alien_exp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_alien_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_alien_exp.setAutoDraw(false);
    }
    
    // *key_resp_exp_alien* updates
    if (t >= 0.0 && key_resp_exp_alien.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_exp_alien.tStart = t;  // (not accounting for frame time here)
      key_resp_exp_alien.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_exp_alien.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_exp_alien.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_exp_alien.clearEvents(); });
    }

    frameRemains = 0.0 + 3.95 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_exp_alien.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_exp_alien.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_exp_alien.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_exp_alien.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_exp_alien_allKeys = _key_resp_exp_alien_allKeys.concat(theseKeys);
      if (_key_resp_exp_alien_allKeys.length > 0) {
        key_resp_exp_alien.keys = _key_resp_exp_alien_allKeys[0].name;  // just the first key pressed
        key_resp_exp_alien.rt = _key_resp_exp_alien_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EXP_alienComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var trialgain;
function EXP_alienRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EXP_alien' ---
    for (const thisComponent of EXP_alienComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_define_alien
    // precreate variables
    trialgain = 0; // Is gold earned on the current trial?
    transmoney = "NA";
    select_alien = true;
    var rand_money;
    
    // determine visual parameters based on choice
    if ((planet === "purple")) {
        if ((key_resp_exp_alien.keys === "x")) {
            if ((flip_sides === true)) {
                m_img_exp_alien_selection1.setImage("resources/alien4_a1.png");
                m_img_exp_alien_selection2.setImage("resources/alien4_a2.png");
                l_img_exp_alien_selection1.setImage("resources/blank.png");
                l_img_exp_alien_selection2.setImage("resources/blank.png");
                r_img_exp_alien_selection1.setImage("resources/alien3_deact.png");
                r_img_exp_alien_selection2.setImage("resources/alien3_deact.png");
                psychoJS.experiment.addData("chosen_alien", "alien4");
                probs = p4;
                [transmoney, rand_money] = get(probs);
                if ((transmoney === 2)) {
                    img_exp_alien_result.setImage("resources/alien4_norm.png");
                    gold_exp.setImage("resources/t.png");
                    totalgold += 1;
                    trialgain = 1;
                } else {
                    img_exp_alien_result.setImage("resources/alien4_norm.png");
                    gold_exp.setImage("resources/blank.png");
                }
            } else {
                m_img_exp_alien_selection1.setImage("resources/alien3_a1.png");
                m_img_exp_alien_selection2.setImage("resources/alien3_a2.png");
                l_img_exp_alien_selection1.setImage("resources/blank.png");
                l_img_exp_alien_selection2.setImage("resources/blank.png");
                r_img_exp_alien_selection1.setImage("resources/alien4_deact.png");
                r_img_exp_alien_selection2.setImage("resources/alien4_deact.png");
                psychoJS.experiment.addData("chosen_alien", "alien3");
                probs = p3;
                [transmoney, rand_money] = get(probs);
                if ((transmoney === 2)) {
                    img_exp_alien_result.setImage("resources/alien3_norm.png");
                    gold_exp.setImage("resources/t.png");
                    totalgold += 1;
                    trialgain = 1;
                } else {
                    img_exp_alien_result.setImage("resources/alien3_norm.png");
                    gold_exp.setImage("resources/blank.png");
                }
            }
        } else {
            if ((key_resp_exp_alien.keys === "m")) {
                if ((flip_sides === true)) {
                    l_img_exp_alien_selection1.setImage("resources/alien4_deact.png");
                    l_img_exp_alien_selection2.setImage("resources/alien4_deact.png");
                    m_img_exp_alien_selection1.setImage("resources/alien3_a1.png");
                    m_img_exp_alien_selection2.setImage("resources/alien3_a2.png");
                    r_img_exp_alien_selection1.setImage("resources/blank.png");
                    r_img_exp_alien_selection2.setImage("resources/blank.png");
                    psychoJS.experiment.addData("chosen_alien", "alien3");
                    probs = p3;
                    [transmoney, rand_money] = get(probs);
                    if ((transmoney === 2)) {
                        img_exp_alien_result.setImage("resources/alien3_norm.png");
                        gold_exp.setImage("resources/t.png");
                        totalgold += 1;
                        trialgain = 1;
                    } else {
                        img_exp_alien_result.setImage("resources/alien3_norm.png");
                        gold_exp.setImage("resources/blank.png");
                    }
                } else {
                    l_img_exp_alien_selection1.setImage("resources/alien3_deact.png");
                    l_img_exp_alien_selection2.setImage("resources/alien3_deact.png");
                    m_img_exp_alien_selection1.setImage("resources/alien4_a1.png");
                    m_img_exp_alien_selection2.setImage("resources/alien4_a2.png");
                    r_img_exp_alien_selection1.setImage("resources/blank.png");
                    r_img_exp_alien_selection2.setImage("resources/blank.png");
                    psychoJS.experiment.addData("chosen_alien", "alien4");
                    probs = p4;
                    [transmoney, rand_money] = get(probs);
                    if ((transmoney === 2)) {
                        img_exp_alien_result.setImage("resources/alien4_norm.png");
                        gold_exp.setImage("resources/t.png");
                        totalgold += 1;
                        trialgain = 1;
                    } else {
                        img_exp_alien_result.setImage("resources/alien4_norm.png");
                        gold_exp.setImage("resources/blank.png");
                    }
                }
            } else {
                if ((flip_sides === true)) {
                    l_img_exp_alien_selection1.setImage("resources/alien4_sp.png");
                    l_img_exp_alien_selection2.setImage("resources/alien4_sp.png");
                    r_img_exp_alien_selection1.setImage("resources/alien3_sp.png");
                    r_img_exp_alien_selection2.setImage("resources/alien3_sp.png");
                    m_img_exp_alien_selection1.setImage("resources/blank.png");
                    m_img_exp_alien_selection2.setImage("resources/blank.png");
                    img_exp_alien_result.setImage("resources/blank.png");
                    gold_exp.setImage("resources/blank.png");
                    select_alien = false;
                    psychoJS.experiment.addData("chosen_alien", "none");
                } else {
                    l_img_exp_alien_selection1.setImage("resources/alien3_sp.png");
                    l_img_exp_alien_selection2.setImage("resources/alien3_sp.png");
                    r_img_exp_alien_selection1.setImage("resources/alien4_sp.png");
                    r_img_exp_alien_selection2.setImage("resources/alien4_sp.png");
                    m_img_exp_alien_selection1.setImage("resources/blank.png");
                    m_img_exp_alien_selection2.setImage("resources/blank.png");
                    img_exp_alien_result.setImage("resources/blank.png");
                    gold_exp.setImage("resources/blank.png");
                    select_alien = false;
                    psychoJS.experiment.addData("chosen_alien", "none");
                }
            }
        }
    } else {
        if ((planet === "red")) {
            if ((key_resp_exp_alien.keys === "x")) {
                if ((flip_sides === true)) {
                    m_img_exp_alien_selection1.setImage("resources/alien2_a1.png");
                    m_img_exp_alien_selection2.setImage("resources/alien2_a2.png");
                    l_img_exp_alien_selection1.setImage("resources/blank.png");
                    l_img_exp_alien_selection2.setImage("resources/blank.png");
                    r_img_exp_alien_selection1.setImage("resources/alien1_deact.png");
                    r_img_exp_alien_selection2.setImage("resources/alien1_deact.png");
                    psychoJS.experiment.addData("chosen_alien", "alien2");
                    probs = p2;
                    [transmoney, rand_money] = get(probs);
                    if ((transmoney === 2)) {
                        img_exp_alien_result.setImage("resources/alien2_norm.png");
                        gold_exp.setImage("resources/t.png");
                        totalgold += 1;
                        trialgain = 1;
                    } else {
                        img_exp_alien_result.setImage("resources/alien2_norm.png");
                        gold_exp.setImage("resources/blank.png");
                    }
                } else {
                    m_img_exp_alien_selection1.setImage("resources/alien1_a1.png");
                    m_img_exp_alien_selection2.setImage("resources/alien1_a2.png");
                    l_img_exp_alien_selection1.setImage("resources/blank.png");
                    l_img_exp_alien_selection2.setImage("resources/blank.png");
                    r_img_exp_alien_selection1.setImage("resources/alien2_deact.png");
                    r_img_exp_alien_selection2.setImage("resources/alien2_deact.png");
                    psychoJS.experiment.addData("chosen_alien", "alien1");
                    probs = p1;
                    [transmoney, rand_money] = get(probs);
                    if ((transmoney === 2)) {
                        img_exp_alien_result.setImage("resources/alien1_norm.png");
                        gold_exp.setImage("resources/t.png");
                        totalgold += 1;
                        trialgain = 1;
                    } else {
                        img_exp_alien_result.setImage("resources/alien1_norm.png");
                        gold_exp.setImage("resources/blank.png");
                    }
                }
            } else {
                if ((key_resp_exp_alien.keys === "m")) {
                    if ((flip_sides === true)) {
                        l_img_exp_alien_selection1.setImage("resources/alien2_deact.png");
                        l_img_exp_alien_selection2.setImage("resources/alien2_deact.png");
                        m_img_exp_alien_selection1.setImage("resources/alien1_a1.png");
                        m_img_exp_alien_selection2.setImage("resources/alien1_a2.png");
                        r_img_exp_alien_selection1.setImage("resources/blank.png");
                        r_img_exp_alien_selection2.setImage("resources/blank.png");
                        psychoJS.experiment.addData("chosen_alien", "alien1");
                        probs = p1;
                        [transmoney, rand_money] = get(probs);
                        if ((transmoney === 2)) {
                            img_exp_alien_result.setImage("resources/alien1_norm.png");
                            gold_exp.setImage("resources/t.png");
                            totalgold += 1;
                            trialgain = 1;
                        } else {
                            img_exp_alien_result.setImage("resources/alien1_norm.png");
                            gold_exp.setImage("resources/blank.png");
                        }
                    } else {
                        l_img_exp_alien_selection1.setImage("resources/alien1_deact.png");
                        l_img_exp_alien_selection2.setImage("resources/alien1_deact.png");
                        m_img_exp_alien_selection1.setImage("resources/alien2_a1.png");
                        m_img_exp_alien_selection2.setImage("resources/alien2_a2.png");
                        r_img_exp_alien_selection1.setImage("resources/blank.png");
                        r_img_exp_alien_selection2.setImage("resources/blank.png");
                        psychoJS.experiment.addData("chosen_alien", "alien2");
                        probs = p2;
                        [transmoney, rand_money] = get(probs);
                        if ((transmoney === 2)) {
                            img_exp_alien_result.setImage("resources/alien2_norm.png");
                            gold_exp.setImage("resources/t.png");
                            totalgold += 1;
                            trialgain = 1;
                        } else {
                            img_exp_alien_result.setImage("resources/alien2_norm.png");
                            gold_exp.setImage("resources/blank.png");
                        }
                    }
                } else {
                    if ((flip_sides === true)) {
                        l_img_exp_alien_selection1.setImage("resources/alien2_sp.png");
                        l_img_exp_alien_selection2.setImage("resources/alien2_sp.png");
                        r_img_exp_alien_selection1.setImage("resources/alien1_sp.png");
                        r_img_exp_alien_selection2.setImage("resources/alien1_sp.png");
                        m_img_exp_alien_selection1.setImage("resources/blank.png");
                        m_img_exp_alien_selection2.setImage("resources/blank.png");
                        img_exp_alien_result.setImage("resources/blank.png");
                        gold_exp.setImage("resources/blank.png");
                        select_alien = false;
                        psychoJS.experiment.addData("chosen_alien", "none");
                    } else {
                        l_img_exp_alien_selection1.setImage("resources/alien1_sp.png");
                        l_img_exp_alien_selection2.setImage("resources/alien1_sp.png");
                        r_img_exp_alien_selection1.setImage("resources/alien2_sp.png");
                        r_img_exp_alien_selection2.setImage("resources/alien2_sp.png");
                        m_img_exp_alien_selection1.setImage("resources/blank.png");
                        m_img_exp_alien_selection2.setImage("resources/blank.png");
                        img_exp_alien_result.setImage("resources/blank.png");
                        gold_exp.setImage("resources/blank.png");
                        select_alien = false;
                        psychoJS.experiment.addData("chosen_alien", "none");
                    }
                }
            }
        }
    }
    
    // save helper variables
    psychoJS.experiment.addData("select_alien", select_alien);
    psychoJS.experiment.addData("transmoney", transmoney);
    psychoJS.experiment.addData("rand_money", rand_money);
    psychoJS.experiment.addData("totalgold", totalgold);
    psychoJS.experiment.addData("trialgain", trialgain);
    psychoJS.experiment.addData("probs", probs);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_exp_alien.corr, level);
    }
    psychoJS.experiment.addData('key_resp_exp_alien.keys', key_resp_exp_alien.keys);
    if (typeof key_resp_exp_alien.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_exp_alien.rt', key_resp_exp_alien.rt);
        routineTimer.reset();
        }
    
    key_resp_exp_alien.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EXP_alien_selectionComponents;
function EXP_alien_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EXP_alien_selection' ---
    t = 0;
    EXP_alien_selectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EXP_alien_selectionComponents = [];
    EXP_alien_selectionComponents.push(background_exp_alien_selection);
    EXP_alien_selectionComponents.push(m_img_exp_alien_selection1);
    EXP_alien_selectionComponents.push(m_img_exp_alien_selection2);
    EXP_alien_selectionComponents.push(l_img_exp_alien_selection1);
    EXP_alien_selectionComponents.push(l_img_exp_alien_selection2);
    EXP_alien_selectionComponents.push(r_img_exp_alien_selection1);
    EXP_alien_selectionComponents.push(r_img_exp_alien_selection2);
    EXP_alien_selectionComponents.push(img_exp_alien_result);
    EXP_alien_selectionComponents.push(gold_exp);
    
    for (const thisComponent of EXP_alien_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EXP_alien_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EXP_alien_selection' ---
    // get current time
    t = EXP_alien_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_exp_alien_selection* updates
    if (t >= 0.0 && background_exp_alien_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_exp_alien_selection.tStart = t;  // (not accounting for frame time here)
      background_exp_alien_selection.frameNStart = frameN;  // exact frame index
      
      background_exp_alien_selection.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (background_exp_alien_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      background_exp_alien_selection.setAutoDraw(false);
    }
    
    // *m_img_exp_alien_selection1* updates
    if (t >= 0.0 && m_img_exp_alien_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_exp_alien_selection1.tStart = t;  // (not accounting for frame time here)
      m_img_exp_alien_selection1.frameNStart = frameN;  // exact frame index
      
      m_img_exp_alien_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_exp_alien_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_exp_alien_selection1.setAutoDraw(false);
    }
    
    // *m_img_exp_alien_selection2* updates
    if (t >= 0.5 && m_img_exp_alien_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      m_img_exp_alien_selection2.tStart = t;  // (not accounting for frame time here)
      m_img_exp_alien_selection2.frameNStart = frameN;  // exact frame index
      
      m_img_exp_alien_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (m_img_exp_alien_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      m_img_exp_alien_selection2.setAutoDraw(false);
    }
    
    // *l_img_exp_alien_selection1* updates
    if (t >= 0.0 && l_img_exp_alien_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_exp_alien_selection1.tStart = t;  // (not accounting for frame time here)
      l_img_exp_alien_selection1.frameNStart = frameN;  // exact frame index
      
      l_img_exp_alien_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_exp_alien_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_exp_alien_selection1.setAutoDraw(false);
    }
    
    // *l_img_exp_alien_selection2* updates
    if (t >= 0.5 && l_img_exp_alien_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_exp_alien_selection2.tStart = t;  // (not accounting for frame time here)
      l_img_exp_alien_selection2.frameNStart = frameN;  // exact frame index
      
      l_img_exp_alien_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_exp_alien_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_exp_alien_selection2.setAutoDraw(false);
    }
    
    // *r_img_exp_alien_selection1* updates
    if (t >= 0.0 && r_img_exp_alien_selection1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_exp_alien_selection1.tStart = t;  // (not accounting for frame time here)
      r_img_exp_alien_selection1.frameNStart = frameN;  // exact frame index
      
      r_img_exp_alien_selection1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_exp_alien_selection1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_exp_alien_selection1.setAutoDraw(false);
    }
    
    // *r_img_exp_alien_selection2* updates
    if (t >= 0.5 && r_img_exp_alien_selection2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_exp_alien_selection2.tStart = t;  // (not accounting for frame time here)
      r_img_exp_alien_selection2.frameNStart = frameN;  // exact frame index
      
      r_img_exp_alien_selection2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_exp_alien_selection2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_exp_alien_selection2.setAutoDraw(false);
    }
    
    // *img_exp_alien_result* updates
    if (t >= 0.91 && img_exp_alien_result.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_exp_alien_result.tStart = t;  // (not accounting for frame time here)
      img_exp_alien_result.frameNStart = frameN;  // exact frame index
      
      img_exp_alien_result.setAutoDraw(true);
    }

    frameRemains = 0.91 + 0.59 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (img_exp_alien_result.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img_exp_alien_result.setAutoDraw(false);
    }
    
    // *gold_exp* updates
    if (t >= 1 && gold_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_exp.tStart = t;  // (not accounting for frame time here)
      gold_exp.frameNStart = frameN;  // exact frame index
      
      gold_exp.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gold_exp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gold_exp.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EXP_alien_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EXP_alien_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EXP_alien_selection' ---
    for (const thisComponent of EXP_alien_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_show_total_gold_allKeys;
var total_goldComponents;
function total_goldRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'total_gold' ---
    t = 0;
    total_goldClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_show_exp_gold.setText((("You got " + totalgold.toString()) + " pieces of treasure.\n\nPress SPACE to continue."));
    key_resp_show_total_gold.keys = undefined;
    key_resp_show_total_gold.rt = undefined;
    _key_resp_show_total_gold_allKeys = [];
    // keep track of which components have finished
    total_goldComponents = [];
    total_goldComponents.push(text_show_exp_gold);
    total_goldComponents.push(key_resp_show_total_gold);
    
    for (const thisComponent of total_goldComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function total_goldRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'total_gold' ---
    // get current time
    t = total_goldClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_show_exp_gold* updates
    if (t >= 0.0 && text_show_exp_gold.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_show_exp_gold.tStart = t;  // (not accounting for frame time here)
      text_show_exp_gold.frameNStart = frameN;  // exact frame index
      
      text_show_exp_gold.setAutoDraw(true);
    }

    
    // *key_resp_show_total_gold* updates
    if (t >= 0.0 && key_resp_show_total_gold.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_show_total_gold.tStart = t;  // (not accounting for frame time here)
      key_resp_show_total_gold.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_show_total_gold.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_show_total_gold.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_show_total_gold.clearEvents(); });
    }

    if (key_resp_show_total_gold.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_show_total_gold.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_show_total_gold_allKeys = _key_resp_show_total_gold_allKeys.concat(theseKeys);
      if (_key_resp_show_total_gold_allKeys.length > 0) {
        key_resp_show_total_gold.keys = _key_resp_show_total_gold_allKeys[_key_resp_show_total_gold_allKeys.length - 1].name;  // just the last key pressed
        key_resp_show_total_gold.rt = _key_resp_show_total_gold_allKeys[_key_resp_show_total_gold_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of total_goldComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function total_goldRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'total_gold' ---
    for (const thisComponent of total_goldComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_show_total_gold.stop();
    // the Routine "total_gold" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_transition_to_post_allKeys;
var transition_to_postComponents;
function transition_to_postRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'transition_to_post' ---
    t = 0;
    transition_to_postClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_transition_to_post.keys = undefined;
    key_transition_to_post.rt = undefined;
    _key_transition_to_post_allKeys = [];
    // keep track of which components have finished
    transition_to_postComponents = [];
    transition_to_postComponents.push(key_transition_to_post);
    transition_to_postComponents.push(text_transition_to_post);
    
    for (const thisComponent of transition_to_postComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function transition_to_postRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'transition_to_post' ---
    // get current time
    t = transition_to_postClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_transition_to_post* updates
    if (t >= 0.0 && key_transition_to_post.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_transition_to_post.tStart = t;  // (not accounting for frame time here)
      key_transition_to_post.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_transition_to_post.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_transition_to_post.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_transition_to_post.clearEvents(); });
    }

    if (key_transition_to_post.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_transition_to_post.getKeys({keyList: ['space'], waitRelease: false});
      _key_transition_to_post_allKeys = _key_transition_to_post_allKeys.concat(theseKeys);
      if (_key_transition_to_post_allKeys.length > 0) {
        key_transition_to_post.keys = _key_transition_to_post_allKeys[_key_transition_to_post_allKeys.length - 1].name;  // just the last key pressed
        key_transition_to_post.rt = _key_transition_to_post_allKeys[_key_transition_to_post_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_transition_to_post* updates
    if (t >= 0.0 && text_transition_to_post.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_transition_to_post.tStart = t;  // (not accounting for frame time here)
      text_transition_to_post.frameNStart = frameN;  // exact frame index
      
      text_transition_to_post.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of transition_to_postComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function transition_to_postRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'transition_to_post' ---
    for (const thisComponent of transition_to_postComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_transition_to_post.stop();
    // the Routine "transition_to_post" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var post_taskComponents;
function post_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'post_task' ---
    t = 0;
    post_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    img_up_l.setPos(pos_img_left_up);
    img_up_l.setSize(size);
    img_up_l.setImage(left_up_img);
    img_up_r.setSize(size);
    img_up_r.setImage(right_up_img);
    img_down_l.setPos([(- 0.3), (- 0.27)]);
    img_down_l.setSize(size);
    img_down_l.setImage(left_down_img_1);
    img_down_l2.setSize(size);
    img_down_l2.setImage(left_down_img_2);
    image_down_r.setSize(size);
    image_down_r.setImage(right_down_img_1);
    img_down_r2.setSize(size);
    img_down_r2.setImage(right_down_img_2);
    up_text.setPos(pos_text_up);
    up_text.setText(text_up);
    down_text.setText(text_down);
    slider.reset()
    // Run 'Begin Routine' code from code_phase_saving
    // save phase info
    psychoJS.experiment.addData("phase", "post");
    
    // keep track of which components have finished
    post_taskComponents = [];
    post_taskComponents.push(key_resp);
    post_taskComponents.push(img_up_l);
    post_taskComponents.push(img_up_r);
    post_taskComponents.push(img_down_l);
    post_taskComponents.push(img_down_l2);
    post_taskComponents.push(image_down_r);
    post_taskComponents.push(img_down_r2);
    post_taskComponents.push(up_text);
    post_taskComponents.push(down_text);
    post_taskComponents.push(slider);
    
    for (const thisComponent of post_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function post_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'post_task' ---
    // get current time
    t = post_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['m', 'x', '1', '2', '3', '4', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *img_up_l* updates
    if (t >= 0.0 && img_up_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_up_l.tStart = t;  // (not accounting for frame time here)
      img_up_l.frameNStart = frameN;  // exact frame index
      
      img_up_l.setAutoDraw(true);
    }

    
    // *img_up_r* updates
    if (t >= 0.0 && img_up_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_up_r.tStart = t;  // (not accounting for frame time here)
      img_up_r.frameNStart = frameN;  // exact frame index
      
      img_up_r.setAutoDraw(true);
    }

    
    // *img_down_l* updates
    if (t >= 0.0 && img_down_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_down_l.tStart = t;  // (not accounting for frame time here)
      img_down_l.frameNStart = frameN;  // exact frame index
      
      img_down_l.setAutoDraw(true);
    }

    
    // *img_down_l2* updates
    if (t >= 0.0 && img_down_l2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_down_l2.tStart = t;  // (not accounting for frame time here)
      img_down_l2.frameNStart = frameN;  // exact frame index
      
      img_down_l2.setAutoDraw(true);
    }

    
    // *image_down_r* updates
    if (t >= 0.0 && image_down_r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_down_r.tStart = t;  // (not accounting for frame time here)
      image_down_r.frameNStart = frameN;  // exact frame index
      
      image_down_r.setAutoDraw(true);
    }

    
    // *img_down_r2* updates
    if (t >= 0.0 && img_down_r2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_down_r2.tStart = t;  // (not accounting for frame time here)
      img_down_r2.frameNStart = frameN;  // exact frame index
      
      img_down_r2.setAutoDraw(true);
    }

    
    // *up_text* updates
    if (t >= 0.0 && up_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      up_text.tStart = t;  // (not accounting for frame time here)
      up_text.frameNStart = frameN;  // exact frame index
      
      up_text.setAutoDraw(true);
    }

    
    // *down_text* updates
    if (t >= 0.0 && down_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      down_text.tStart = t;  // (not accounting for frame time here)
      down_text.frameNStart = frameN;  // exact frame index
      
      down_text.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    if (slider.status === PsychoJS.Status.STARTED && Boolean(show_slider)) {
      slider.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'post_task' ---
    for (const thisComponent of post_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "post_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_transition_allKeys;
var transitionComponents;
function transitionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'transition' ---
    t = 0;
    transitionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_transition.keys = undefined;
    key_resp_transition.rt = undefined;
    _key_resp_transition_allKeys = [];
    // keep track of which components have finished
    transitionComponents = [];
    transitionComponents.push(text_transition);
    transitionComponents.push(key_resp_transition);
    
    for (const thisComponent of transitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function transitionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'transition' ---
    // get current time
    t = transitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_transition* updates
    if (t >= 0.0 && text_transition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_transition.tStart = t;  // (not accounting for frame time here)
      text_transition.frameNStart = frameN;  // exact frame index
      
      text_transition.setAutoDraw(true);
    }

    
    // *key_resp_transition* updates
    if (t >= 0.0 && key_resp_transition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_transition.tStart = t;  // (not accounting for frame time here)
      key_resp_transition.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_transition.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_transition.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_transition.clearEvents(); });
    }

    if (key_resp_transition.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_transition.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_transition_allKeys = _key_resp_transition_allKeys.concat(theseKeys);
      if (_key_resp_transition_allKeys.length > 0) {
        key_resp_transition.keys = _key_resp_transition_allKeys[_key_resp_transition_allKeys.length - 1].name;  // just the last key pressed
        key_resp_transition.rt = _key_resp_transition_allKeys[_key_resp_transition_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of transitionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function transitionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'transition' ---
    for (const thisComponent of transitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_transition.stop();
    // the Routine "transition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_probe_allKeys;
var static_probabilities;
var static_probability_l;
var static_probability_r;
var accuracy;
var PROBEComponents;
function PROBERoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PROBE' ---
    t = 0;
    PROBEClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    l_img_probe.setImage(probe_la);
    r_img_probe.setImage(probe_ra);
    key_resp_probe.keys = undefined;
    key_resp_probe.rt = undefined;
    _key_resp_probe_allKeys = [];
    // Run 'Begin Routine' code from code_probe
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    static_probabilities = {"resources/alien1_norm.png": static_probability_1, "resources/alien2_norm.png": static_probability_2, "resources/alien3_norm.png": static_probability_3, "resources/alien4_norm.png": static_probability_4};
    if ((_pj.in_es6(probe_la, static_probabilities) && _pj.in_es6(probe_ra, static_probabilities))) {
        static_probability_l = static_probabilities[probe_la];
        static_probability_r = static_probabilities[probe_ra];
    }
    psychoJS.experiment.addData("phase", "probe");
    psychoJS.experiment.addData("static_probability_left", static_probability_l);
    psychoJS.experiment.addData("static_probability_right", static_probability_r);
    if ((static_probability_l > static_probability_r)) {
        if ((key_resp_probe.keys === "x")) {
            accuracy = 1;
        } else {
            if ((key_resp_probe.keys === "m")) {
                accuracy = 0;
            } else {
                accuracy = "none";
            }
        }
    }
    if ((static_probability_r > static_probability_l)) {
        if ((key_resp_probe.keys === "m")) {
            accuracy = 1;
        } else {
            if ((key_resp_probe.keys === "x")) {
                accuracy = 0;
            } else {
                accuracy = "none";
            }
        }
    }
    psychoJS.experiment.addData("accuracy", accuracy);
    
    // keep track of which components have finished
    PROBEComponents = [];
    PROBEComponents.push(probe_question);
    PROBEComponents.push(l_img_probe);
    PROBEComponents.push(r_img_probe);
    PROBEComponents.push(key_resp_probe);
    
    for (const thisComponent of PROBEComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PROBERoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PROBE' ---
    // get current time
    t = PROBEClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probe_question* updates
    if (t >= 0.0 && probe_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_question.tStart = t;  // (not accounting for frame time here)
      probe_question.frameNStart = frameN;  // exact frame index
      
      probe_question.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe_question.setAutoDraw(false);
    }
    
    // *l_img_probe* updates
    if (t >= 0.0 && l_img_probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_img_probe.tStart = t;  // (not accounting for frame time here)
      l_img_probe.frameNStart = frameN;  // exact frame index
      
      l_img_probe.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (l_img_probe.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      l_img_probe.setAutoDraw(false);
    }
    
    // *r_img_probe* updates
    if (t >= 0.0 && r_img_probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r_img_probe.tStart = t;  // (not accounting for frame time here)
      r_img_probe.frameNStart = frameN;  // exact frame index
      
      r_img_probe.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (r_img_probe.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      r_img_probe.setAutoDraw(false);
    }
    
    // *key_resp_probe* updates
    if (t >= 0.0 && key_resp_probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_probe.tStart = t;  // (not accounting for frame time here)
      key_resp_probe.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_probe.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_probe.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_probe.clearEvents(); });
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_probe.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_probe.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_probe.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_probe.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_probe_allKeys = _key_resp_probe_allKeys.concat(theseKeys);
      if (_key_resp_probe_allKeys.length > 0) {
        key_resp_probe.keys = _key_resp_probe_allKeys[_key_resp_probe_allKeys.length - 1].name;  // just the last key pressed
        key_resp_probe.rt = _key_resp_probe_allKeys[_key_resp_probe_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PROBEComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PROBERoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PROBE' ---
    for (const thisComponent of PROBEComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_probe.corr, level);
    }
    psychoJS.experiment.addData('key_resp_probe.keys', key_resp_probe.keys);
    if (typeof key_resp_probe.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_probe.rt', key_resp_probe.rt);
        routineTimer.reset();
        }
    
    key_resp_probe.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_end_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_end.keys = undefined;
    key_end.rt = undefined;
    _key_end_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(key_end);
    endComponents.push(text_end);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_end* updates
    if (t >= 0.0 && key_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_end.tStart = t;  // (not accounting for frame time here)
      key_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_end.clearEvents(); });
    }

    if (key_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_end_allKeys = _key_end_allKeys.concat(theseKeys);
      if (_key_end_allKeys.length > 0) {
        key_end.keys = _key_end_allKeys[_key_end_allKeys.length - 1].name;  // just the last key pressed
        key_end.rt = _key_end_allKeys[_key_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_end.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
