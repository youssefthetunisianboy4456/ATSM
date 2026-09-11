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
        pos2=x.find("]")
        if x[6]=="[" and pos2!= -1 and pos2<pos1:
            y.append(x[7:pos2])
            x=x[0:6]+x[pos2+1:]
        pos1=x.find('-end')
        y.append(x[:pos1+4])
        x=x[pos1+4:]
print(y)
s=y[1]
print('wlecome :::::'+s[6:len(s)-4]+'bye-----')
    