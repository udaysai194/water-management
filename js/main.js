var vm = new Vue({
  el: '#app',
  data: {
    tank:400,
    col1:200,
    col2:200,
    street1:100,
    street2:100,
    street3:100,
    street4:100,
    house1:50,
    house2:50,
    house3:50,
    house4:50,
    house5:50,
    house6:50,
    house7:50,
    house8:50,
    complaints: []
  },

  methods: {
    findError: function(){
      //colony check
        if(Number(this.col1)+Number(this.col2) == Number(this.tank)){
          document.getElementById('col1').style.backgroundColor = "green";
          document.getElementById('col2').style.backgroundColor = "green";
        }
        else{
          document.getElementById('col1').style.backgroundColor = "red";
          document.getElementById('col2').style.backgroundColor = "red";
          this.complaints.push('Problem in flow from tank to colonies pipe line')
        }
        //street check
        if(Number(this.street1)+Number(this.street2) == Number(this.col1)){
          document.getElementById('street1').style.backgroundColor = "green";
          document.getElementById('street2').style.backgroundColor = "green";
        }
        else{
          document.getElementById('street1').style.backgroundColor = "red";
          document.getElementById('street2').style.backgroundColor = "red";
          this.complaints.push('Problem in flow from colony 1 to streets pipe line');
        }

        if(Number(this.street3)+Number(this.street4) == Number(this.col2)){
          document.getElementById('street3').style.backgroundColor = "green";
          document.getElementById('street4').style.backgroundColor = "green";
        }
        else{
          document.getElementById('street3').style.backgroundColor = "red";
          document.getElementById('street4').style.backgroundColor = "red";
          this.complaints.push('Problem in flow from colony 2 to streets pipe line');
        }
        //houses check
        if(Number(this.house1)+Number(this.house2) == Number(this.street1)){
          document.getElementById('house1').style.backgroundColor = "green";
          document.getElementById('house2').style.backgroundColor = "green";
        }
        else{
          document.getElementById('house1').style.backgroundColor = "red";
          document.getElementById('house2').style.backgroundColor = "red";
          this.complaints.push('Problem in flow from street 1 to houses pipe line');
        }

        if(Number(this.house3)+Number(this.house4) == Number(this.street2)){
          document.getElementById('house3').style.backgroundColor = "green";
          document.getElementById('house4').style.backgroundColor = "green";
        }
        else{
          document.getElementById('house3').style.backgroundColor = "red";
          document.getElementById('house4').style.backgroundColor = "red";
          this.complaints.push('Problem in flow from street 2 to houses pipe line');
        }
        if(Number(this.house5)+Number(this.house6) == Number(this.street3)){
          document.getElementById('house5').style.backgroundColor = "green";
          document.getElementById('house6').style.backgroundColor = "green";
        }
        else{
          document.getElementById('house5').style.backgroundColor = "red";
          document.getElementById('house6').style.backgroundColor = "red";
          this.complaints.push('Problem in flow from street 3 to houses pipe line');
        }

        if(Number(this.house7)+Number(this.house8) == Number(this.street4)){
          document.getElementById('house7').style.backgroundColor = "green";
          document.getElementById('house8').style.backgroundColor = "green";
        }
        else{
          document.getElementById('house7').style.backgroundColor = "red";
          document.getElementById('house8').style.backgroundColor = "red";
          this.complaints.push('Problem in flow from street 4 to houses pipe line');
        }

    }
  }
})
