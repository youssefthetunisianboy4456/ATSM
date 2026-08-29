str=''
x=input('start')
while x!="stop" :
    year = input( 'An')
    rInt = input('Rang International')
    rAf = input('Rang Africain')
    rAr = input('Rang Arabe')
    oro = input('Or')
    ag = input('Argent')
    br= input('Bronze')
    hm=input('HM')
    total = input('Score total')
    x=input('done')
    str+="{ \n year : +"+year+",\n rInt : "+rInt+",\n rAf : "+rAf+",\n rAr : "+rAr+", \n or : "+oro+",\n ag : "+ag+",\n br: "+br+",\n hm: "+hm+", \n total :"+ total +"\n },"+"\n" 
print(str)        
