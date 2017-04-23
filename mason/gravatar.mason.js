<mason>
Charset=utf8
Author=ShuangYa
Created=2014/09/09
Updated=2014/09/06
name=Gravatar Redirector
version=1.0
Website=
Comment=
Description=Gravatar Redirector
Usage=
Url=^http([s]?)://([0-9]?)\.gravatar\.com/avatar/(.*?)$
</mason>
<parts>
part1=.@@@L3
</parts>
<part1>
function _masonRedirect(spec){
	return spec.replace(/([0-9]?)\.gravatar/,'gravatar.duoshuo').replace(/^https/,'http');
}
</part1>