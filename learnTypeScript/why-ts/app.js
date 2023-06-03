// api url | url/숫자 -> url에 있는 목록 중에 첫번쨰꺼를 들고온다.
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address  //{Address}에 대한 타입을 정의할 수 있다.
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User   //타입에 대한 타입객체(Property)를 정의할 수 있다.
 * @property {string} name //{}에 들어가 있는게 타입
 * @property {string} email
 * @property {Address} address
 */

//하나의  데이터만 받아올 수 있도록 function을 만든다.
/**
 * @returns {Promise<User>}
 */
function fetchUser(){
  return axios.get(url);
}

//fetchUser(); //코드상에서는 알수가 없다.
//console.log(fetchUser()); //해줘야 fetchUser에 대한것을 화면상에서 볼수있다.

//response. 했을 떄 속성들을 볼 수 있다.
//오탈자가 나면 브라우저에서 넘어가서 실행하고 확인하기 전에 코드상에서 바로 살펴볼수있다. -> 타입스크립트의 장점1
fetchUser().then(function(response){
  response.address.city;
});


function startApp() {
/*  axios
    .get(url)*/
  fetchUser()
    .then(function (response) {
      //console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
        //console.log(user);
        username.innerText = user[0].name;
        email.innerText = user[0].email;
        address.innerText = user[0].addres.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
