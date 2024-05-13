function quotesgenerator() {
    let quotes =  [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Dream big and dare to fail. - Norman Vaughan",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best revenge is massive success. - Frank Sinatra",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale"
  ];

let para = document.querySelector("#para")

let quotes_length = Math.random()*quotes.length 

let quotes_round = Math.floor(quotes_length)

let quotes_answer = quotes[quotes_round]

para.innerText =`"${quotes_answer}"`
    
}