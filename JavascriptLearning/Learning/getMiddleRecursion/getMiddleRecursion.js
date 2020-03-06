function getMiddle(s)
{
    if (s.length <= 2) {
        return s}  

    else {return getMiddle(s.slice(1,s.length-1)) }
}