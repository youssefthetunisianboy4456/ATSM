x=input()
y=[]
while (len (x)>0) :
    pos=x.find('-start')
    if pos==-1 or x[pos:].find('-end')==-1 :
        y.append(x)
        x=''
    else :
        
        pos1=x[pos:].find('-end')
        y.append(x[:pos])
        x=x[pos:]
        y.append(x[:pos1+4])
        x=x[pos1+4:]
print(y)
s=y[1]
print('wlecome :::::'+s[6:len(s)-4]+'bye-----')
    