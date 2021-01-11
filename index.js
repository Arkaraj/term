module.exports = {
    join: (string = "Term...", symbol = "") => {
        if (typeof string !== "string") throw new TypeError("Term wants a string!");
        return string.replace(/\s/g, `${symbol}`);
    },
    // Makes passed in string to lowercase
    lowerCase: (string) => {
        if (typeof string !== "string") throw new TypeError("Term wants a string!");
        return string.toLowerCase();
    },
    // Makes passed in string to Uppercase
    upperCase: (string) => {
        if (typeof string !== "string") throw new TypeError("Term wants a string!");
        return string.toUpperCase();
    },
    toBinary: (num) => {
        if (typeof num !== "number") throw new TypeError("Term wants a number!");
        return Number(num).toString(2);
    },
    toDecimal: (bin) => {
        return parseInt(bin, 2);
    },
    height: (num = 0, metric = 'cm', convMetric = 'm') => {
        if (metric == 'cm' && convMetric == 'm') {
            return (num / 1000);
        } else if (metric == 'm' && convMetric == 'cm') {
            return (num * 1000);
        } else if (metric == 'cm' && convMetric == 'ft') {
            return (num * 0.0328084);
        } else if (metric == 'cm' && convMetric == 'in') {
            return (num * 0.393701);
        } else if (metric == 'ft' && convMetric == 'in') {
            return (num * 12);
        } else if (metric == 'in' && convMetric == 'ft') {
            return (num / 12);
        } else {
            throw new TypeError("Term wants in ft,in, cm or m");
        }
    },
    weight: (weigh = 0, metric = 'kg', convMetric = 'lb') => {
        if (metric == 'kg' && convMetric == 'lb') {
            return (weigh * 2.20462);
        } else if (metric == 'lb' && convMetric == 'kg') {
            return (weigh / 2.20462);
        } else if (metric == 'kg' && convMetric == 'oz') {
            return (weigh * 35.274);
        } else if (metric == 'oz' && convMetric == 'kg') {
            return (weigh / 35.274);
        } else {
            throw new TypeError("Term wants in kg: kilogram,lb: pounds or oz: ounces");
        }
    },
    temperature: (temp = 0, metric = 'c', convMetric = 'f') => {
        if (metric == 'c' && convMetric == 'f') {
            return ((temp * (9 / 5)) + 32);
        } else if (metric == 'f' && convMetric == 'c') {
            return ((temp - 32) * (5 / 9));
        } else if (metric == 'c' && convMetric == 'k') {
            return (temp + 273.15);
        } else {
            throw new TypeError("Term wants in c: celsius,f: Fahrenheit  or k: kelvin");
        }
    },
    getDate: () => {
        return new Date();
    }
}


