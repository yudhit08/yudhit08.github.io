const Logo = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="300"
			height="300"
			viewBox="0 0 1000 1000"
		>
			<image
				width="875"
				height="756"
				x="63"
				y="122"
				data-name="Polygon 1 copy"
				xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADkCAMAAACi0hENAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACl1BMVEVk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9pk/9oAAADwGgPrAAAA23RSTlMAAgVj3TYBz8kaF5OLBvv6VE/g2yYiqaIL/v0JaGbv7TMxvbsSEX18A/dEQ86UVaitDGlt7vE0N8EUfoX4BEnQ1R8bHtHnmjLsD5GMB/wILFZeYrzh6FBGJy2g3q61e4YOevN1R6X1OUE9y8pkfxODw+ooPGHU3LRLeR2e2plzvgoYWZ/y5HIpx123L4fprw2xmy5u0xVFl+KYMKzCKuW5YIKmqkBvOIScX9dNOpJcdubSSBC2JGcc1vYjW/TIj5BCd1iWK1dadCBRO8U+sBnMiN/j+XFKU9mNaqsAHFBXAAAAAWJLR0TcB2CDtwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+cCEBAmNBMAUYQAAA2gSURBVHjazZ37Y1TFFcc3VJeiTaAU1A0tDUo0gCKoIGjQSKoNhIfKw4pA4wNQpApoC0qkIFpBUFqQ+iggVsFqBWu1LY/aWmpf9v1+7D9Tsskm9+7eO/f7nXPOjp+f956Z+RLu7jnznTO5nJQ6cQQxg0JPoIdPnBWcs0Nr0EN+cDEwnwwtQS9DQutwTmgF+jg3rAyfCr3+MvUNIWUY+rF4S5YYFlKHT4defYTh4WT4TOi1RxkRToeRodce47xQMpwfeuVxLiiEkaFxVOiVV/DZMDp8LvS6K8mPDiHD5/Oh111FUwgdxoRedQIX1l6Gi0KvOYmxtdehOfSaE7m41jJcEnrFybSMq60M41pCrziF8bXVYULo9aZS04rMpaFXm05NKzJDQq/Wwbm1k+Gy0Gt1UbuKTEN96LU6mVgrHSaGXmkGNarIDA+9zixqVJEZEXqdmVxeCxkmhV5lNrWoyBQmh14lwBX2OlwZeo0I+ausZZjyMdhaBphqrcPVoVcIYlyRmRZ6fSjGFZnpodcHc42lDNeGXh2OZUWmdUbo1REYVmSuC702iuutZGiDpzDdbm/jBviTM610aIen8IUrrGRovhG3XFxmI8NN8AS+WOyYZaTD7GIn/Nk5JhWZufPQ8fMdxeJsGxnmNzBFwZstdLgFHv7WM59umG+iw4IzoQfjH1+oL8Mi+NU3qrHn8wssZFhcmspt8Oe/pK/D7fDgS3ofWKwvw7w7SpGJnzFLtWVYBg99Q98Td8DvE5jlfaG/DD8xWbsi0wUP3VZ+5E5tGWbeVQ6Nu1ev1JXhbnjge/qfuWumsg4r+kPjbua6KZoyrISrLzNaB55aoSvDqsjf+L3wU2dr6nAfPGw03S2s0pShbnUkNLHfPk1PhvvhQZtjz63WLOKtiYX+CvzcA3o64K+lBfEH1+jJ0LUoHhqvCD2oJQNuqh9T8eSiLjUdOitCr4WfjL6yJOCm+vy6ymfxpCiD9UMrQz8EP3sPts4s8B+GD1druF5Jh2VVofHvsNxXNWT4Gjxcb2IRZ4OODBsTJvYI/PSjGjrgpvpNSY9v1JChvjspNG5dfEwuA/5jqD3x+W4N08jmxNBfh5+fM1cqQ2ELPFhbcoTNchm2pvw4xjfXHpfqgJvq097KU7aKddiWEvoJ+FWZf1Imw1Vw9aUl9Vt6m1SGqY1pob8Bx3hKpkMTPFD6PlrjVJkM+e3p88PLwZMkMuCm+mZHlO2y3YwdjtBPw1FEFRn8m+kiVxi8xJu0AOd/7SY4jqAig5vqdzrjPCnxEu1yhsZfYP4VGTzJzz/jjrTLX4aRGVkS7lO62lcH3FT/cEakVv+Tns9mhC7shkN5VmTw/ZJRjVmxnvWV4bbMaX4TjjXdTwe8zPqt7GD43kuMGW3ZoffA0bwqMripvh2I1uZnIdkLhF4Hvyp9KjKEqf45JN5eHxn2QSdT5b/9HdwMB/82FG/0Pg8dnodCFy6AA9IVmRfg0Kgh60VehpfAdPk7cES6IoPX09Ajk3NfYmXI70dnewCOSVZkJsGBm+GY+9k0Az9YcxAOzVVkCFP9y3hU8hzPFsLFcQiOSlVk8Jf7TiLqwi2UDq8QofFeFExFBjfVZyUWcV5hZGhfyYT+LhyXqMjgdb9DzFyLK3HnYS73KhWaOC2VlbH0sx8OOS8zsYjzKi7Da1zk4kI4MlyRwbdQbyIni/sWWuhz2o/Dsz6MBcRN9fw+0WC0pMGfsML9nXVPIPEINxqUWMQBDcfNHXzoJfC8jyDhcFO9j7O/YywUerZHaGIHcm12sDY4mN9JD8hwPN/LGX0WPHWgIoN/tV3iM1fMcLzAK3RxGDz317NCfQ8OhScWcQDD8WLP0A1z0MlnVWSIXmlPe04221fSZx/2AM/tr3MHegMOtMd3rtmG4zu9QxP/q52FT9xUzyUWcZa7Qw/Yh3nehHVwFlVxU/0t/nPNMhyvEIQufh9egeO3MG6qnycymDg9NqtEFvmhcHnZsQR8F51OLGIU3kqPHLMPe3AUXsOxtBBvwyGkBjSH4XiNMDS+/ZT/QXIAwpD4jnSyqYbjSvswz3PwKg4kB8BN9ROkc003HHeKQxd/CK8jsSKDm+o1jpCnGI6r7cM8eMK8O+mVjJvql9NTqybFcLxBITThiz8sefhdjbkmf0dvlMftAXYqVldkiE717+lMNsFwnGwf5sHbIVZVZHBT/e06cy12VyeHm+VRe8GdPBVbh7ipPi/+YitTZTjeqna2bhz8qqyoyPwI1uGY38wSqDIcb1ILXXwQXs+10cfw3SBZYhGnwnA8ldwMcQK7LaIVGcJUr3CSoZ+44dhlH+bBT7pGKjI/hh/6ieZc44bjHfJ4UfBfx8fLj4zGjQnK3YAjhuPJwpMBlZyATbD9FZkmWIYJunONGo53yaPFuRheVV8RATfV6/em6jccZ9mHPcB2jHL9737cVP+I+lxbT/aFhjfjcfBt+1M9H8dN9bP051o2HGfbhz04gi4sf5A6Ob9MPrVqSobjGSonTSv5KVxYOlAsjodl0Eos4hzv+QmM2Ic9wAuN7+M2kvyNNpPde+ZHvtXFNu+ii9t3Ev2kYmIRZ/T03M+MQls0b5IfiU3j5znYN0sjPCqYwItmc12bu88sNn7SFcSsiWEpEyA9ggSHlXWwu2akx0vYfsIqeqFLVYYPzGQYV9qqZzzEHPieLYBh09terzHjKSfZqajDL8xmWfaem7SKLKF4/51FYtHH6b4h8DMnNHo9Yk0SixIDZ1PQM0g8ajc0zDeTIXpWSbPyGcf7EG2cNJ+AAtHWv9gZRS90esSeMptf/CyjUdJZZOxvDuwSi4rjTzOOyyOmcKuCDr80m92bFbtvJkWpEsRJ1zQME4uqs+8GRco+LhfrYJdYVL/GT+oXrctI+9zdazaz1oS9ZfVNjH7wk66JGCYWSb1StDe1IhwT6fC22bwOJv7Ke8NsPNGt64aJRbKzX3fTO8b5Ah3sEou03lqqJog4uNelkg/N5lRILaAuMRvT+57Inu0uI9LPGOqZpKr4lacOvzabkasXo5pproq58PGtGIaJxW9cwyqZKBPAb7aJYnTNTjHROhlByVSbxG89ZDC8CDujd6+SYTeBbg8dLjWbzXsZI2uY7lP4HS0D238BJ7u3d6fZ2PSV2y1UVxKK7F7vXYJDkRmwV7DbJRbrurJHFx/SSudRSgbDxAK5C0J6aM9BG6WDyrmYRLC7Qd6yu3l6GCHDAflwKRQ+wmYgOtTr5Pe4DNLu3w7QdvmSQ95uiPbq4m7wqeB3Sfl12ciGuJmk3i6xwE2r/k0gnDTg59AMEwvmrjnfpiBuhuETMEwsqLsHLa4ix+2ilonFhYwMnk2D3DyFD/8HMxnYu0m9mkg5+SM+eJ1dYsHeVTvWo6mYmy588LvNZOh4gNTBo8mcG9x3nusyk8HDp8Q3HXRCHLEw3HK+nphFGd3d1Q/wge0SC+LKzAiahuN38GENEwuiFWkETcMx0RT2tJkMJ5jWtBH0DMd457xcvclF8CWoVsUR1AzHzH73UTMZyNbVEbQMx4RV7E9mMhC3J1SiZDhmXNZ/NpOBbm0fQcdw3IQPaHc6iL/qIIrGiahp+HCGicVjEhlUDMd4S27DxMLrKpQIcsPxX/DBdpvJ4Hc1TgSx4ZhoCmWYWBz3uyopgtRwTJTBhPdTuvC8OkvvH+mv+ED5v5nJoHEKRGY4xq+EIK6iYWnFT5A7kBiOl+LDGCYWgqsWIwgMx8RFhIaJhejqzQj+/ZGJ+6INEwvRVawRvA3HRLfZ3P1mMgiv5o3gazh+DR/CLrGQXtUcxc9wjLeitEws8CtKsvEzHOOXiBoaeRWuchfOk8jwdttZcIhXNYCH4Ri/O8gysej283WnwhuOD+HBDROLjfgsMNhjMc8Q31YvmMmg2omjBGs4HoOHtksssu3DPJ3UDAi7hWFiQRiyYDjDMdx40TKxSO3kL4IxHL+Oh91qJgNkH+YhDMd/J8pg75vJgNmHeXDDMX5TTu4hMxlcN7/IQA3HxNEbw8QCtQ/zoIZj4tTqP8xkwO3DPNjtG+fhAQ0Ti+X4LGggwzHTK2mpmQyMfZgHMRwTbQbXm8nA2Yd5sg3HTDFuuJkMBt1QY2QbjvHm9oaJBWsf5skyHK/GQxkmFqx9mCfLcDwED2XWIrjYgfeJ98ZtOCbOaJ5jJoNim8N0nIZjpr2BXWIB31QuwmU4PoWHsUss/OzDPOmGY6KpnmFi4Wcf5kk3HO/BgxxmVkax0tM+zJNmOH4ZD2GYWPjah3nSDMfEt5VdYuFvH+ZJNhxfgwcYYSZDcWLtZEg2HON3b1omFhL7ME+S4fif+OP/MpNBZh/mqTYc/xt/2DCxeL62MiQYjkfiD//HTAapfZin0nCMX5domVhI7cM8FYZjphuvXX/HNrF9mCduOP4v/uBHdn8OCvZhnqh5g7gDps6s24hWE3mSqOF4Ff6YXWLRSryqNRkwHG/HH5psl1jo2Id5BgzH+D3suf+ZyaBlH+YpG46P4o8YJhY7QslQNhwzDfTsEgs9+zBPr+H4NP6AXWKhaR/m2Vak2rYPskssNoWUoWQ4/hD/eKeZDLr2YZ7NjEXRMLHQtQ/zzOmehX/YLrHoZnudqkM4NY/Y/Tmo24cNGWSXWGwIvTaGEePNkL8k/w+sHOnLwFJbWAAAAABJRU5ErkJggg=="
			></image>
		</svg>
	);
};

export default Logo;
