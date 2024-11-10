var box   = document.getElementById("num")
        var para1 = document.getElementById("para1")
        var para2 = document.getElementById("para2")
        var para3 = document.getElementById("para3")

        var b = 10
        var c = 0
      function check()
        {
            var box1= Number(box.value)

            var a = Math.random()
            var random = Math.floor(a*10) + 1

            
            if(b==0){
                para3.textContent ="your Total score :"+ c
            }else if(box1!=random)
            {
                b--
                para1.textContent ="You are Wrong!"
                para2.textContent = "your life :"+ b
            }else
            {
                para1.textContent ="You are Right!"
                c++             
            }
        }