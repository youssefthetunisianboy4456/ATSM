def pToD(x) :
    while x.find('$')!= -1 :
        y=""
        p=x.find('$')
        if p==0 or p==len(x)-1 or x[p-1]=="\\" :
            y+=x[:p+1]
            x=x[p+1:]
        elif (x[p+1:]).find('$')==-1 :
            y+=x[:p+1]
            x=x[p+1:]
            break
        else :
            q=(x[p+2:]).find("$")
            y+=x[0:p]+"\\("+x[p+1:q]+"\\)"
            x=x[q+1:]
        return y
print(pToD(input()))