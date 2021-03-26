// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]


let categories = [];
let NUM_CATEGORIES = 6
let NUM_QUESTIONS = 5


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {

    let response = await axios.get('http://jservice.io/api/random?count=6');
    let catId = [];
    console.log(response.data)
    for (let clue of response.data) {

        let idInObj = clue.id;
        console.log(idInObj);
        catId.push(idInObj);
    };
    console.log(catId);
    return catId;
}



/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *``
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    for (let id of catId) {
        console.log(id)
        let response = await axios.get(`http://jservice.io/api/category?id=${id}`);
        console.log(response.data)
        let clueArr = [];
        let newObj = `{question: ${response.data.question}, answer: ${response.data.answer}, showing: ${null}}`;
        clueArr.push(newObj);
        // console.log(newObj);
        let catData = {
            title: response.data.title,
            clues: clueArr
        }
        return catData;
    }

}



// call this function instead of all the functions individually

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initially, just show a "?" where the question/answer would go.)
 */

function fillTable() {
    let body = document.body,
        tbl = document.createElement('table');
    tbl.setAttribute('id', 'jeopardy')
    th = document.createElement('thead');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    for (let i = 0; i < 5; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < 6; j++) {
            let td = tr.insertCell();
            td.setAttribute('id', 'cell')
            td.appendChild(document.createTextNode('?'));
            td.style.border = '1px solid black';
        }
    }

    for (let i = 0; i <= 0; i++) {
        let tr = th.insertRow();
        for (let j = 0; j < 6; j++) {
            let head = tr.insertCell();
            head.setAttribute('id', 'head-cell')
            head.style.border = '1px solid black';
        }
    }
    tbl.appendChild(th);
    body.appendChild(tbl);

}
fillTable();
/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

async function handleClick() {
    let catId = await getCategoryIds();
    let clues = await getCategory(catId);
    let table = document.getElementById("jeopardy");
    table.addEventListener("click", function (e) {
        if (e.target && e.target.id == "cell") {
            if (clues.showing === null) {
                $('cell').append(clueArr.question)
            } else if (clues.showing === clueArr.question) {
                clues.showing = clueArr.answer;
            } else if (clues.showing === clueArr.answer) {
                return clueArr.answer;
            }
        }
    });
}
handleClick();

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */