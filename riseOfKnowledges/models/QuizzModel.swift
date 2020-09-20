//
//  QuizzModel.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/17/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import Foundation

struct QuizzModel : Decodable, Identifiable {
    
    var id: String
    var lang: String
    var difficulty: String
    var question: String
    var answer: String
    var anecdote: String
    
//    var userId: Int
//    var id: Int
//    var title: String
//    var body: String
}
