//use the date object to avoid bringing in unnecessary dependencies
module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    //add a format_url() method
    //chain the methodes with replace() to return URLs that have more after the domain 
    format_url: url => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
    //add a format_plural() method
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
    
        return word;
    }
};