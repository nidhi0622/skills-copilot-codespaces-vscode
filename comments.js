//Create web browser
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
//Create a function to get comments from a specific url
async function getComments(url) {
    //Create a browser
    const browser = await puppeteer.launch();
    //Create a new page
    const page = await browser.newPage();
    //Go to a specific url
    await page.goto(url);
    //Wait for all comments to load
    await page.waitForSelector('.comment');
    //Get all comments from the page
    const comments = await page.evaluate(() => {
        //Create an array to store comments
        let comments = [];
        //Get all comments
        const commentsList = document.querySelectorAll('.comment');
        //Loop through each comment
        commentsList.forEach(commentItem => {
            //Get the comment content
            let commentContent = commentItem.querySelector('.comment__content').innerText;
            //Get the comment author
            let commentAuthor = commentItem.querySelector('.comment__author').innerText;
            //Get the comment date
            let commentDate = commentItem.querySelector('.comment__date').innerText;
            //Push the comment to the array
            comments.push({
                commentAuthor: commentAuthor,
                commentDate: commentDate,
                commentContent: commentContent
            });
        });
        //Return the comments array
        return comments;
    });
    //Close the browser
    await browser.close();
    //Return the comments
    return comments;
}
//Create a function to get comments from a specific url
async function getComments2(url) {
    //Create a browser
    const browser = await puppeteer.launch();
    //Create a new page
    const page = await browser.newPage();
    //Go to a specific url
    await page.goto(url);
    //Wait for all comments to load
    await page.waitForSelector('.comment');
    //Get all comments from the page
    const comments = await page.evaluate(() => {
        //Create an array to store comments
        let comments = [];
        //Get all comments
        const commentsList = document.querySelectorAll('.comment');
        //Loop through each comment
        commentsList.forEach(commentItem => {
            //Get the comment content
            let commentContent = commentItem.querySelector('.comment__content').innerText;
            //Get the comment author
            let commentAuthor = commentItem.querySelector('.comment__author').innerText;