var friendsData = require('../data/friends');



module.exports = function (app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });

    app.post('api/friends', function(req, res) {

        var newFriend = req.body;
        var bestScore = 9999;
        var bestMatch;

        for (var i = 0; i < friendsData.length; i++) {
            var score = compareFriends(newFriend.scores, friendsData[i].scores);
            console.log("Score for " + friendData[i].name + ": " + score);
            if (score < bestScore) {
                bestMatch = friendsData[i];
                bestScore = score;
            }
        }

        console.log('Best Match: ' + bestMatch);

        friendsData.push(newFriend);
        res.json(bestMatch);
    });
};


function compareFriends(s1, s2) {
    var difference = 0;
    for (var i = 0; i < s1.length; i++) {
        difference += Math.abs(s1[i] - s2[i]);
    }
    return difference;
};
