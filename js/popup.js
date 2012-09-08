// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$.ajax({
	type: "POST",
	url: "theheck.square7.ch/index.php?username=admin",
	dataType: "json",
	data: {func:"select", password:"asdf123"}
}).done(function(ret){
	var json = jQuery.parseJSON(ret);
	alert(json.q);
});