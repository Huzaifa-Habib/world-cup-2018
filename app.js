// Get main div id which is parent of all
var mainDiv = document.getElementById("mainCont");
var data =[
  {
    "name": "World Cup 2018",
    "groups": [
      {
        "name": "Group A",
        "standings": [
          {
            "team": {
              "name": "Uruguay",
              "code": "URU"
            },
            "pos": 1,
            "played": 3,
            "won": 3,
            "drawn": 0,
            "lost": 0,
            "goals_for": 5,
            "goals_against": 0,
            "pts": 9
            ,"id":0

          },
          {
            "team": {
              "name": "Russia",
              "code": "RUS"
            },
            "pos": 2,
            "played": 3,
            "won": 2,
            "drawn": 0,
            "lost": 1,
            "goals_for": 8,
            "goals_against": 4,
            "pts": 6
            ,"id":1


          },
          {
            "team": {
              "name": "Saudi Arabia",
              "code": "KSA"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 7,
            "pts": 3
            ,"id":2

          },
          {
            "team": {
              "name": "Egypt",
              "code": "EGY"
            },
            "pos": 4,
            "played": 3,
            "won": 0,
            "drawn": 0,
            "lost": 3,
            "goals_for": 2,
            "goals_against": 6,
            "pts": 0
            ,"id":3

          }
        ]
      },
      {
        "name": "Group B",
        "standings": [
          {
            "team": {
              "name": "Spain",
              "code": "ESP"
            },
            "pos": 1,
            "played": 3,
            "won": 1,
            "drawn": 2,
            "lost": 0,
            "goals_for": 6,
            "goals_against": 5,
            "pts": 5
            ,"id":4

          },
          {
            "team": {
              "name": "Portugal",
              "code": "POR"
            },
            "pos": 2,
            "played": 3,
            "won": 1,
            "drawn": 2,
            "lost": 0,
            "goals_for": 5,
            "goals_against": 4,
            "pts": 5
            ,"id":5

          },
          {
            "team": {
              "name": "Iran",
              "code": "IRN"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 1,
            "lost": 1,
            "goals_for": 2,
            "goals_against": 2,
            "pts": 4
            ,"id":6

          },
          {
            "team": {
              "name": "Morocco",
              "code": "MAR"
            },
            "pos": 4,
            "played": 3,
            "won": 0,
            "drawn": 1,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 4,
            "pts": 1
            ,"id":7

          }
        ]
      },
      {
        "name": "Group C",
        "standings": [
          {
            "team": {
              "name": "France",
              "code": "FRA"
            },
            "pos": 1,
            "played": 3,
            "won": 2,
            "drawn": 1,
            "lost": 0,
            "goals_for": 3,
            "goals_against": 1,
            "pts": 7
            ,"id":8

          },
          {
            "team": {
              "name": "Denmark",
              "code": "DEN"
            },
            "pos": 2,
            "played": 3,
            "won": 1,
            "drawn": 2,
            "lost": 0,
            "goals_for": 2,
            "goals_against": 1,
            "pts": 5
            ,"id":9

          },
          {
            "team": {
              "name": "Peru",
              "code": "PER"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 2,
            "pts": 3
            ,"id":10

          },
          {
            "team": {
              "name": "Australia",
              "code": "AUS"
            },
            "pos": 4,
            "played": 3,
            "won": 0,
            "drawn": 1,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 5,
            "pts": 1
            ,"id":11

          }
        ]
      },
      {
        "name": "Group D",
        "standings": [
          {
            "team": {
              "name": "Croatia",
              "code": "CRO"
            },
            "pos": 1,
            "played": 3,
            "won": 3,
            "drawn": 0,
            "lost": 0,
            "goals_for": 7,
            "goals_against": 1,
            "pts": 9
            ,"id":12

          },
          {
            "team": {
              "name": "Argentina",
              "code": "ARG"
            },
            "pos": 2,
            "played": 3,
            "won": 1,
            "drawn": 1,
            "lost": 1,
            "goals_for": 3,
            "goals_against": 5,
            "pts": 4
            ,"id":13

          },
          {
            "team": {
              "name": "Nigeria",
              "code": "NGA"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 3,
            "goals_against": 4,
            "pts": 3
            ,"id":14

          },
          {
            "team": {
              "name": "Iceland",
              "code": "ISL"
            },
            "pos": 4,
            "played": 3,
            "won": 0,
            "drawn": 1,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 5,
            "pts": 1
            ,"id":15

          }
        ]
      },
      {
        "name": "Group E",
        "standings": [
          {
            "team": {
              "name": "Brazil",
              "code": "BRA"
            },
            "pos": 1,
            "played": 3,
            "won": 2,
            "drawn": 1,
            "lost": 0,
            "goals_for": 5,
            "goals_against": 1,
            "pts": 7
            ,"id":16

          },
          {
            "team": {
              "name": "Switzerland",
              "code": "SUI"
            },
            "pos": 2,
            "played": 3,
            "won": 1,
            "drawn": 2,
            "lost": 0,
            "goals_for": 5,
            "goals_against": 4,
            "pts": 5
            ,"id":17

          },
          {
            "team": {
              "name": "Serbia",
              "code": "SRB"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 4,
            "pts": 3
            ,"id":18

          },
          {
            "team": {
              "name": "Costa Rica",
              "code": "CRC"
            },
            "pos": 4,
            "played": 3,
            "won": 0,
            "drawn": 1,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 5,
            "pts": 1
            ,"id":19

          }
        ]
      },
      {
        "name": "Group F",
        "standings": [
          {
            "team": {
              "name": "Sweden",
              "code": "SWE"
            },
            "pos": 1,
            "played": 3,
            "won": 2,
            "drawn": 0,
            "lost": 1,
            "goals_for": 5,
            "goals_against": 2,
            "pts": 6
            ,"id":20

          },
          {
            "team": {
              "name": "Mexico",
              "code": "MEX"
            },
            "pos": 2,
            "played": 3,
            "won": 2,
            "drawn": 0,
            "lost": 1,
            "goals_for": 3,
            "goals_against": 4,
            "pts": 6
            ,"id":21

          },
          {
            "team": {
              "name": "South Korea",
              "code": "KOR"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 3,
            "goals_against": 3,
            "pts": 3
            ,"id":22

          },
          {
            "team": {
              "name": "Germany",
              "code": "GER"
            },
            "pos": 4,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 4,
            "pts": 3
            ,"id":23

          }
        ]
      },
      {
        "name": "Group G",
        "standings": [
          {
            "team": {
              "name": "Belgium",
              "code": "BEL"
            },
            "pos": 1,
            "played": 3,
            "won": 3,
            "drawn": 0,
            "lost": 0,
            "goals_for": 9,
            "goals_against": 2,
            "pts": 9
            ,"id":24

          },
          {
            "team": {
              "name": "England",
              "code": "ENG"
            },
            "pos": 2,
            "played": 3,
            "won": 2,
            "drawn": 0,
            "lost": 1,
            "goals_for": 8,
            "goals_against": 3,
            "pts": 6
            ,"id":25

          },
          {
            "team": {
              "name": "Tunisia",
              "code": "TUN"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 5,
            "goals_against": 8,
            "pts": 3
            ,"id":26

          },
          {
            "team": {
              "name": "Panama",
              "code": "PAN"
            },
            "pos": 4,
            "played": 3,
            "won": 0,
            "drawn": 0,
            "lost": 3,
            "goals_for": 2,
            "goals_against": 11,
            "pts": 0
            ,"id":27

          }
        ]
      },
      {
        "name": "Group H",
        "standings": [
          {
            "team": {
              "name": "Colombia",
              "code": "COL"
            },
            "pos": 1,
            "played": 3,
            "won": 2,
            "drawn": 0,
            "lost": 1,
            "goals_for": 5,
            "goals_against": 2,
            "pts": 6
            ,"id":28

          },
          {
            "team": {
              "name": "Japan",
              "code": "JPN"
            },
            "pos": 2,
            "played": 3,
            "won": 1,
            "drawn": 1,
            "lost": 1,
            "goals_for": 4,
            "goals_against": 4,
            "pts": 4
            ,"id":29

          },
          {
            "team": {
              "name": "Senegal",
              "code": "SEN"
            },
            "pos": 3,
            "played": 3,
            "won": 1,
            "drawn": 1,
            "lost": 1,
            "goals_for": 4,
            "goals_against": 4,
            "pts": 4
            ,"id":30

          },
          {
            "team": {
              "name": "Poland",
              "code": "POL"
            },
            "pos": 4,
            "played": 3,
            "won": 1,
            "drawn": 0,
            "lost": 2,
            "goals_for": 2,
            "goals_against": 5,
            "pts": 3
            ,"id":31

          }
        ]
      }
    ]
  }
   
]



for (var key in data) {

  var mainHeadingDiv = document.createElement("div");
  var mainHeadingDivH1 = document.createElement("h1");
  var mainHeadingDivH1Txt = document.createTextNode(data[key].name);
  var groupsArr = data[key].groups;


  mainDiv.appendChild(mainHeadingDiv);
  mainHeadingDiv.appendChild(mainHeadingDivH1);
  mainHeadingDiv.setAttribute("class", "main-heading")
  mainHeadingDivH1.appendChild(mainHeadingDivH1Txt);




    for (var key2 in groupsArr) {
      var groupsNameDiv = document.createElement("div")
      groupsNameDiv.setAttribute("class", "groups-name")
      var groupsNameDivH1 = document.createElement("h1");
      var groupsNameDivH1Txt = document.createTextNode(groupsArr[key2].name)

      mainDiv.appendChild(groupsNameDiv);
      groupsNameDiv.appendChild(groupsNameDivH1);
      groupsNameDivH1.appendChild(groupsNameDivH1Txt);

      // console.log(groupsArr[key2].name)

      var standingsArr = groupsArr[key2].standings;

      var table = document.createElement("table");
      var tableFirstTr = document.createElement("tr");
      var tableFirstTrTh = document.createElement("th");
      var tableFirstTrThTxt = document.createTextNode("Teams")

      var tableFirstTrTh1 = document.createElement("th");
      var tableFirstTrTh1Txt = document.createTextNode("Code")

      var tableFirstTrTh1 = document.createElement("th");
      var tableFirstTrTh1Txt = document.createTextNode("Code")
        
      var tableFirstTrTh2 = document.createElement("th");
      var tableFirstTrTh2Txt = document.createTextNode("Position")
      
      var tableFirstTrTh3 = document.createElement("th");
      var tableFirstTrTh3Txt = document.createTextNode("Matches")

      var tableFirstTrTh4 = document.createElement("th");
      var tableFirstTrTh4Txt = document.createTextNode("Won")

      var tableFirstTrTh5 = document.createElement("th");
      var tableFirstTrTh5Txt = document.createTextNode("Drawn")

      var tableFirstTrTh6 = document.createElement("th");
      var tableFirstTrTh6Txt = document.createTextNode("Lost")

      var tableFirstTrTh7 = document.createElement("th");
      var tableFirstTrTh7Txt = document.createTextNode("Goals")

      var tableFirstTrTh8 = document.createElement("th");
      var tableFirstTrTh8Txt = document.createTextNode("Goals Conceded")

      var tableFirstTrTh9 = document.createElement("th");
      var tableFirstTrTh9Txt = document.createTextNode("Points")

  

      

        
        
        
        

        

      groupsNameDiv.appendChild(table);
      table.appendChild(tableFirstTr);
      tableFirstTr.appendChild(tableFirstTrTh);
      tableFirstTrTh.appendChild(tableFirstTrThTxt)

      tableFirstTr.appendChild(tableFirstTrTh1);
      tableFirstTrTh1.appendChild(tableFirstTrTh1Txt)

      tableFirstTr.appendChild(tableFirstTrTh2);
      tableFirstTrTh2.appendChild(tableFirstTrTh2Txt)

      tableFirstTr.appendChild(tableFirstTrTh3);
      tableFirstTrTh3.appendChild(tableFirstTrTh3Txt)
      
      tableFirstTr.appendChild(tableFirstTrTh4);
      tableFirstTrTh4.appendChild(tableFirstTrTh4Txt)

      tableFirstTr.appendChild(tableFirstTrTh5);
      tableFirstTrTh5.appendChild(tableFirstTrTh5Txt)

      tableFirstTr.appendChild(tableFirstTrTh6);
      tableFirstTrTh6.appendChild(tableFirstTrTh6Txt)

      tableFirstTr.appendChild(tableFirstTrTh7);
      tableFirstTrTh7.appendChild(tableFirstTrTh7Txt)

      tableFirstTr.appendChild(tableFirstTrTh8);
      tableFirstTrTh8.appendChild(tableFirstTrTh8Txt)

      tableFirstTr.appendChild(tableFirstTrTh9);
      tableFirstTrTh9.appendChild(tableFirstTrTh9Txt)

  




    
         





      for (var kye3 in standingsArr) {

      
        var secondTr = document.createElement("tr");
        var secondTrTd = document.createElement("td");
        var secondTrTdTxt = document.createTextNode(standingsArr[kye3].team.name)

        var secondTrTd1 = document.createElement("td");
        var secondTrTd1Txt = document.createTextNode(standingsArr[kye3].team.code)

        var secondTrTd2 = document.createElement("td");
        var secondTrTd2Txt = document.createTextNode(standingsArr[kye3].pos)

        var secondTrTd3 = document.createElement("td");
        var secondTrTd3Txt = document.createTextNode(standingsArr[kye3].played)

        var secondTrTd4 = document.createElement("td");
        var secondTrTd4Txt = document.createTextNode(standingsArr[kye3].won)

        var secondTrTd5 = document.createElement("td");
        var secondTrTd5Txt = document.createTextNode(standingsArr[kye3].drawn)

        var secondTrTd6 = document.createElement("td");
        var secondTrTd6Txt = document.createTextNode(standingsArr[kye3].lost)

        var secondTrTd7 = document.createElement("td");
        var secondTrTd7Txt = document.createTextNode(standingsArr[kye3].goals_for)

        var secondTrTd8 = document.createElement("td");
        var secondTrTd8Txt = document.createTextNode(standingsArr[kye3].goals_against)

        var secondTrTd9 = document.createElement("td");
        var secondTrTd9Txt = document.createTextNode(standingsArr[kye3].pts)



    
             


      
        
       table.appendChild(secondTr)
       secondTr.appendChild(secondTrTd);
       secondTrTd.appendChild(secondTrTdTxt)

       secondTr.appendChild(secondTrTd1);
       secondTrTd1.appendChild(secondTrTd1Txt)

       secondTr.appendChild(secondTrTd2);
       secondTrTd2.appendChild(secondTrTd2Txt)
       
       secondTr.appendChild(secondTrTd3);
       secondTrTd3.appendChild(secondTrTd3Txt)

       secondTr.appendChild(secondTrTd4);
       secondTrTd4.appendChild(secondTrTd4Txt)
       
       secondTr.appendChild(secondTrTd4);
       secondTrTd4.appendChild(secondTrTd4Txt)
       
       secondTr.appendChild(secondTrTd5);
       secondTrTd5.appendChild(secondTrTd5Txt)
       
       secondTr.appendChild(secondTrTd6);
       secondTrTd6.appendChild(secondTrTd6Txt)
       
       secondTr.appendChild(secondTrTd7);
       secondTrTd7.appendChild(secondTrTd7Txt)

       secondTr.appendChild(secondTrTd8);
       secondTrTd8.appendChild(secondTrTd8Txt)

       secondTr.appendChild(secondTrTd9);
       secondTrTd9.appendChild(secondTrTd9Txt)

       

     

      

    }
    
    
    
  }
   
}








  


 


  




    




console.log(mainDiv)