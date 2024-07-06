function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("Title: ".concat(song.title, " - Artist: ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    numStreams: 1236573,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong); // OK
console.log(earnings);
printSong(mySong); // OK
