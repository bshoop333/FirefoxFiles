<mason>
Charset=utf-8
Author=kafan
name=BootstrapCDN Redirector
Created=2017/04/15
Updated=
version=1.0
Website=
Comment=
Description=BootstrapCDN Redirector
Usage=
Url=^https://maxcdn\.bootstrapcdn\.com/bootstrap/(\d+\.){2}\d+/.+
</mason>
<parts>
part1=.@@@L3
</parts>
<part1>
function _masonRedirect(spec){
return spec.replace(/https:\/\/maxcdn\.bootstrapcdn\.com\/bootstrap\/(\d+\.){2}\d+\/(.+)/, "https://raw.githubusercontent.com/YandLiu/VariousTools/master/BootstrapCDN/$2");
}
</part1>