/**
 * Created by skyADMIN on 16/8/26.
 */


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState == 4){
      if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status == 304)){
          console.log(xhr.responseText);
      }
  }
};
xhr.open('get', 'http://121.42.201.69:8080/articles?size=1', true);
xhr.send(null);

console.log(123);