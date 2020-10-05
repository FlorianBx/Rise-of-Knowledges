//
//  ScorePostModel.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 10/5/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct ScorePostModel: Encodable {
    var username: String
    var rank: Int
    var name: String
    var score: Int
}
