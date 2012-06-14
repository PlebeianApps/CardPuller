/**
 * @author Alyssa Reese
 */

function CardData() {
    
        this.db = Ti.Database.open('cardDb'); //create database //open database
        this.db.execute('CREATE TABLE IF NOT EXISTS READINGS (ID INTEGER, TITLE TEXT, DESCRIPTION TEXT, NUMBERCARDS INTEGER)');//create table & columns (columntitle datatype)
        this.db.execute('DELETE FROM READINGS'); //name of table is case sensitive
        this.db.execute('INSERT INTO READINGS (TITLE, DESCRIPTION, NUMBERCARDS ) VALUES(?,?,?)',
        'Circumstances Surrounding You','What is happening in your life right now?',3);
        this.db.execute('INSERT INTO READINGS (TITLE, DESCRIPTION, NUMBERCARDS ) VALUES(?,?,?)',
        'Your Future','What is coming next?',4);
        this.db.execute('INSERT INTO READINGS (TITLE, DESCRIPTION, NUMBERCARDS ) VALUES(?,?,?)',
        'Your relationships','What is happening in your relationships?',2);
        //populate database
        this.db.close();//close database
};

CardData.prototype.getData = function(){
    this.db = Ti.Database.open('cardDb');
    //this.db.open('cardDb');//open database
    //get data
    var rows = this.db.execute('SELECT * FROM READINGS');
    var data = [];
    while(rows.isValidRow()) {
        data.push({
            id: rows.fieldByName("ID"),
            title: rows.fieldByName("TITLE"),
            descrip: rows.fieldByName("DESCRIPTION"), // "description" is a reserved TableView keyword
            numberCards: rows.fieldByName("NUMBERCARDS"),
            color: 'black'
        });
        rows.next();
    }
    this.db.close();
    return data; //return data
};
module.exports = CardData;

