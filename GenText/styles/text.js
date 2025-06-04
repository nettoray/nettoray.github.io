function replace() {
    var a = document.getElementById('normal-text').value;
	var b = a.replace(/a/g, "á").replace(/b/g, "ɓ").replace(/d/g, "đ").replace(/e/g, "є").replace(/f/g, "ƒ").replace(/g/g, "ǵ").replace(/h/g, "ђ").replace(/i/g, "ї").replace(/k/g, "к").replace(/l/g, "ł").replace(/m/g, "м").replace(/n/g, "и").replace(/o/g, "ø").replace(/p/g, "р").replace(/q/g, "ᶐ").replace(/r/g, "я").replace(/t/g, "т").replace(/u/g, "ц").replace(/v/g, "ѵ").replace(/w/g, "ш").replace(/x/g, "х").replace(/y/g, "ў").replace(/z/g, "ʐ").replace(/A/g, "Á").replace(/C/g, "Ͼ").replace(/D/g, "Ɖ").replace(/E/g, "Є").replace(/G/g, "Ĝ").replace(/H/g, "Ҥ").replace(/I/g, "Ї").replace(/M/g, "М").replace(/N/g, "N").replace(/O/g, "Ø").replace(/R/g, "Я").replace(/T/g, "Т").replace(/U/g, "Ц").replace(/V/g, "Ѵ").replace(/W/g, "Ш").replace(/Y/g, "Ӱ").replace(/Z/g, "Ẑ");
	document.getElementById('broken-text').innerHTML = b;
	
}

