//Util object for help functions
class Utils {
    //Converts days to seconds
    //Params: int: days
    //Returns appropriate number of seconds
    static convertDaysToSeconds(days) {
        return days * 24 * 60 * 60;
    }
}

export default Utils