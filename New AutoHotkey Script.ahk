﻿
if (1 == 1)
{
	Loop
	{
		InputBox, x, x
		InputBox, width, width
		halfWidth := Round(width / 2)
		a := (x + halfWidth) / 1920
		a1 := a * 100

		Clipboard := "left: calc(" . a1 .  "vw" . " - " . halfWidth . "px);"
		MsgBox, next
	}
}
else if (1 == 2)
{
	InputBox, y1, y1
	
	Loop
	{
		InputBox, y2, y2
		num := y2 - y1
		Clipboard := "top: " . num . "px;"
		MsgBox, next
	}
}
else
{
	Loop
	{
		InputBox, vw, vw
		InputBox, halfWidth, halfWidth
		a := ((vw * 1350 / 100) - halfWidth) / 1350 * 100

		Clipboard := "left: " . a . "%;"
		MsgBox, next
	}
}
